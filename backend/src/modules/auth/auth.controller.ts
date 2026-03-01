import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service';
import { AuthRequest } from '../../middleware/auth';

export class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await authService.register(req.body);
            res.status(201).json({ message: 'Registration successful', data: result });
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.json({ message: 'Login successful', data: result });
        } catch (error) {
            next(error);
        }
    }

    async refreshToken(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.body;
            const tokens = await authService.refreshToken(refreshToken);
            res.json({ message: 'Token refreshed', data: tokens });
        } catch (error) {
            next(error);
        }
    }

    async logout(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            if (req.userId) {
                await authService.logout(req.userId);
            }
            res.json({ message: 'Logged out successfully' });
        } catch (error) {
            next(error);
        }
    }

    async me(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const { default: prisma } = await import('../../config/database');
            const user = await prisma.user.findUnique({
                where: { id: req.userId },
                select: { id: true, email: true, firstName: true, lastName: true, role: true, avatar: true, bio: true, createdAt: true },
            });
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json({ data: user });
        } catch (error) {
            next(error);
        }
    }
}

export const authController = new AuthController();
