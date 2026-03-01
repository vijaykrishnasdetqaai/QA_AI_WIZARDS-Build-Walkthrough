import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../../config/database';
import { authenticate, authorize, AuthRequest } from '../../middleware/auth';

const router = Router();

// Category CRUD
router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { name: 'asc' },
            include: { _count: { select: { blogs: true } } },
        });
        res.json({ data: categories });
    } catch (error) { next(error); }
});

router.post('/', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description, color, icon } = req.body;
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const category = await prisma.category.create({ data: { name, slug, description, color, icon } });
        res.status(201).json({ data: category });
    } catch (error) { next(error); }
});

router.put('/:id', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await prisma.category.update({ where: { id: req.params.id as string }, data: req.body });
        res.json({ data: category });
    } catch (error) { next(error); }
});

router.delete('/:id', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.category.delete({ where: { id: req.params.id as string } });
        res.json({ message: 'Category deleted' });
    } catch (error) { next(error); }
});

// Roadmap CRUD
export const roadmapRouter = Router();

roadmapRouter.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const roadmaps = await prisma.roadmap.findMany({
            where: { isPublished: true },
            orderBy: { order: 'asc' },
            include: { steps: { orderBy: { order: 'asc' } } },
        });
        res.json({ data: roadmaps });
    } catch (error) { next(error); }
});

roadmapRouter.get('/:slug', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roadmap = await prisma.roadmap.findUnique({
            where: { slug: req.params.slug as string },
            include: { steps: { orderBy: { order: 'asc' } } },
        });
        if (!roadmap) { res.status(404).json({ error: 'Roadmap not found' }); return; }
        res.json({ data: roadmap });
    } catch (error) { next(error); }
});

roadmapRouter.post('/', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, content, icon, color, steps } = req.body;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const roadmap = await prisma.roadmap.create({
            data: {
                title, slug, description, content, icon, color,
                steps: steps ? { create: steps } : undefined,
            },
            include: { steps: true },
        });
        res.status(201).json({ data: roadmap });
    } catch (error) { next(error); }
});

// Comment routes
export const commentRouter = Router();

commentRouter.post('/:blogId', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const comment = await prisma.comment.create({
            data: { content: req.body.content, authorId: req.userId!, blogId: req.params.blogId as string, parentId: req.body.parentId },
            include: { author: { select: { id: true, firstName: true, lastName: true, avatar: true } } },
        });
        res.status(201).json({ data: comment });
    } catch (error) { next(error); }
});

commentRouter.delete('/:id', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const comment = await prisma.comment.findUnique({ where: { id: req.params.id as string } });
        if (!comment) { res.status(404).json({ error: 'Comment not found' }); return; }
        if (comment.authorId !== req.userId) { res.status(403).json({ error: 'Not authorized' }); return; }
        await prisma.comment.delete({ where: { id: req.params.id as string } });
        res.json({ message: 'Comment deleted' });
    } catch (error) { next(error); }
});

// Contact route
export const contactRouter = Router();

contactRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = await prisma.contactMessage.create({ data: { name, email, subject, message } });
        res.status(201).json({ message: 'Message sent successfully', data: { id: contact.id } });
    } catch (error) { next(error); }
});

// Admin routes
export const adminRouter = Router();

adminRouter.get('/stats', authenticate, authorize('ADMIN'), async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const [users, blogs, comments, contacts] = await Promise.all([
            prisma.user.count(),
            prisma.blog.count(),
            prisma.comment.count(),
            prisma.contactMessage.count({ where: { isRead: false } }),
        ]);
        res.json({ data: { users, blogs, comments, unreadContacts: contacts } });
    } catch (error) { next(error); }
});

adminRouter.get('/users', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Math.min(Number(req.query.limit) || 20, 50);
        const users = await prisma.user.findMany({
            skip: (page - 1) * limit, take: limit,
            select: { id: true, email: true, firstName: true, lastName: true, role: true, isActive: true, createdAt: true, lastLoginAt: true },
            orderBy: { createdAt: 'desc' },
        });
        const total = await prisma.user.count();
        res.json({ data: { users, total, page, limit } });
    } catch (error) { next(error); }
});

adminRouter.patch('/users/:id/role', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.update({ where: { id: req.params.id as string }, data: { role: req.body.role } });
        res.json({ data: { id: user.id, role: user.role } });
    } catch (error) { next(error); }
});

adminRouter.get('/contacts', authenticate, authorize('ADMIN'), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const contacts = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, take: Number(req.query.limit) || 50 });
        res.json({ data: contacts });
    } catch (error) { next(error); }
});

export default router;
