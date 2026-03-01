import { z } from 'zod';

export const createBlogSchema = z.object({
    body: z.object({
        title: z.string().min(3, 'Title must be at least 3 characters').max(200),
        content: z.string().min(10, 'Content must be at least 10 characters'),
        excerpt: z.string().max(300).optional(),
        coverImage: z.string().url().optional(),
        categoryId: z.string().uuid().optional(),
        tags: z.array(z.string()).optional(),
        status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
        metaTitle: z.string().max(70).optional(),
        metaDesc: z.string().max(160).optional(),
    }),
});

export const updateBlogSchema = z.object({
    params: z.object({ id: z.string().uuid() }),
    body: z.object({
        title: z.string().min(3).max(200).optional(),
        content: z.string().min(10).optional(),
        excerpt: z.string().max(300).optional(),
        coverImage: z.string().url().optional().nullable(),
        categoryId: z.string().uuid().optional().nullable(),
        tags: z.array(z.string()).optional(),
        status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
        metaTitle: z.string().max(70).optional(),
        metaDesc: z.string().max(160).optional(),
    }),
});
