import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../config/database';
import { config } from '../../config';
import { createError } from '../../middleware/errorHandler';

export class AuthService {
    async register(data: { email: string; password: string; firstName: string; lastName: string }) {
        const existing = await prisma.user.findUnique({ where: { email: data.email } });
        if (existing) {
            throw createError('Email already registered', 409);
        }

        const hashedPassword = await bcrypt.hash(data.password, 12);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
            },
            select: { id: true, email: true, firstName: true, lastName: true, role: true, createdAt: true },
        });

        const tokens = this.generateTokens(user.id, user.role);
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: tokens.refreshToken },
        });

        return { user, ...tokens };
    }

    async login(email: string, password: string) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.isActive) {
            throw createError('Invalid email or password', 401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw createError('Invalid email or password', 401);
        }

        const tokens = this.generateTokens(user.id, user.role);
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: tokens.refreshToken, lastLoginAt: new Date() },
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                avatar: user.avatar,
            },
            ...tokens,
        };
    }

    async refreshToken(token: string) {
        try {
            const decoded = jwt.verify(token, config.jwt.refreshSecret) as { userId: string };
            const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

            if (!user || user.refreshToken !== token) {
                throw createError('Invalid refresh token', 401);
            }

            const tokens = this.generateTokens(user.id, user.role);
            await prisma.user.update({
                where: { id: user.id },
                data: { refreshToken: tokens.refreshToken },
            });

            return tokens;
        } catch {
            throw createError('Invalid refresh token', 401);
        }
    }

    async logout(userId: string) {
        await prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
    }

    private generateTokens(userId: string, role: string) {
        const accessToken = jwt.sign({ userId, role }, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn,
        });
        const refreshToken = jwt.sign({ userId }, config.jwt.refreshSecret, {
            expiresIn: config.jwt.refreshExpiresIn,
        });
        return { accessToken, refreshToken };
    }
}

export const authService = new AuthService();
