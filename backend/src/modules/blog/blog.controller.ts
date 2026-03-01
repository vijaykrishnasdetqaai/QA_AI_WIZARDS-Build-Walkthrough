import { Request, Response, NextFunction } from 'express';
import { blogService } from './blog.service';
import { AuthRequest } from '../../middleware/auth';

export class BlogController {
    async create(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const blog = await blogService.create(req.body, req.userId!);
            res.status(201).json({ message: 'Blog created', data: blog });
        } catch (error) { next(error); }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { page, limit, search, categoryId, status } = req.query;
            const result = await blogService.findAll({
                page: page ? Number(page) : undefined,
                limit: limit ? Number(limit) : undefined,
                search: search as string,
                categoryId: categoryId as string,
                status: status as string,
            });
            res.json({ data: result });
        } catch (error) { next(error); }
    }

    async findBySlug(req: Request, res: Response, next: NextFunction) {
        try {
            const blog = await blogService.findBySlug(req.params.slug);
            res.json({ data: blog });
        } catch (error) { next(error); }
    }

    async update(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const blog = await blogService.update(req.params.id, req.body, req.userId!);
            res.json({ message: 'Blog updated', data: blog });
        } catch (error) { next(error); }
    }

    async delete(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            await blogService.delete(req.params.id, req.userId!, req.userRole!);
            res.json({ message: 'Blog deleted' });
        } catch (error) { next(error); }
    }
}

export const blogController = new BlogController();
