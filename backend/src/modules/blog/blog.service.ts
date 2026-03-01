import prisma from '../../config/database';
import { createError } from '../../middleware/errorHandler';
import { Prisma } from '@prisma/client';

export class BlogService {
    async create(data: {
        title: string; content: string; excerpt?: string; coverImage?: string;
        categoryId?: string; tags?: string[]; status?: string; metaTitle?: string; metaDesc?: string;
    }, authorId: string) {
        const slug = this.generateSlug(data.title);
        const readTime = Math.ceil(data.content.split(/\s+/).length / 200);

        return prisma.blog.create({
            data: {
                title: data.title,
                slug,
                content: data.content,
                excerpt: data.excerpt || data.content.substring(0, 160),
                coverImage: data.coverImage,
                categoryId: data.categoryId,
                tags: data.tags || [],
                status: (data.status as 'DRAFT' | 'PUBLISHED') || 'DRAFT',
                metaTitle: data.metaTitle || data.title,
                metaDesc: data.metaDesc || data.excerpt || data.content.substring(0, 160),
                readTime,
                authorId,
                publishedAt: data.status === 'PUBLISHED' ? new Date() : null,
            },
            include: { author: { select: { id: true, firstName: true, lastName: true, avatar: true } }, category: true },
        });
    }

    async findAll(params: { page?: number; limit?: number; search?: string; categoryId?: string; status?: string }) {
        const page = params.page || 1;
        const limit = Math.min(params.limit || 10, 50);
        const skip = (page - 1) * limit;

        const where: Prisma.BlogWhereInput = {
            ...(params.status ? { status: params.status as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' } : { status: 'PUBLISHED' }),
            ...(params.categoryId ? { categoryId: params.categoryId } : {}),
            ...(params.search ? {
                OR: [
                    { title: { contains: params.search, mode: 'insensitive' as Prisma.QueryMode } },
                    { content: { contains: params.search, mode: 'insensitive' as Prisma.QueryMode } },
                    { tags: { has: params.search } },
                ],
            } : {}),
        };

        const [blogs, total] = await Promise.all([
            prisma.blog.findMany({
                where, skip, take: limit, orderBy: { createdAt: 'desc' },
                include: {
                    author: { select: { id: true, firstName: true, lastName: true, avatar: true } },
                    category: true,
                    _count: { select: { comments: true } },
                },
            }),
            prisma.blog.count({ where }),
        ]);

        return { blogs, total, page, limit, totalPages: Math.ceil(total / limit) };
    }

    async findBySlug(slug: string) {
        const blog = await prisma.blog.findUnique({
            where: { slug },
            include: {
                author: { select: { id: true, firstName: true, lastName: true, avatar: true, bio: true } },
                category: true,
                comments: {
                    where: { parentId: null },
                    include: {
                        author: { select: { id: true, firstName: true, lastName: true, avatar: true } },
                        replies: { include: { author: { select: { id: true, firstName: true, lastName: true, avatar: true } } } },
                    },
                    orderBy: { createdAt: 'desc' },
                },
            },
        });

        if (!blog) throw createError('Blog not found', 404);

        await prisma.blog.update({ where: { slug }, data: { views: { increment: 1 } } });
        return blog;
    }

    async update(id: string, data: Record<string, unknown>, userId: string) {
        const blog = await prisma.blog.findUnique({ where: { id } });
        if (!blog) throw createError('Blog not found', 404);
        if (blog.authorId !== userId) throw createError('Not authorized', 403);

        const updateData: Record<string, unknown> = { ...data };
        if (data.title) updateData.slug = this.generateSlug(data.title as string);
        if (data.content) updateData.readTime = Math.ceil((data.content as string).split(/\s+/).length / 200);
        if (data.status === 'PUBLISHED' && blog.status !== 'PUBLISHED') updateData.publishedAt = new Date();

        return prisma.blog.update({
            where: { id },
            data: updateData as Prisma.BlogUpdateInput,
            include: { author: { select: { id: true, firstName: true, lastName: true, avatar: true } }, category: true },
        });
    }

    async delete(id: string, userId: string, userRole: string) {
        const blog = await prisma.blog.findUnique({ where: { id } });
        if (!blog) throw createError('Blog not found', 404);
        if (blog.authorId !== userId && userRole !== 'ADMIN') throw createError('Not authorized', 403);
        await prisma.blog.delete({ where: { id } });
    }

    private generateSlug(title: string): string {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Date.now().toString(36);
    }
}

export const blogService = new BlogService();
