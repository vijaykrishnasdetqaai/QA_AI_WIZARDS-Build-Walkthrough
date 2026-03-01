import { Router } from 'express';
import { blogController } from './blog.controller';
import { authenticate } from '../../middleware/auth';
import { validate } from '../../middleware/validate';
import { createBlogSchema, updateBlogSchema } from './blog.validation';

const router = Router();

router.get('/', (req, res, next) => blogController.findAll(req, res, next));
router.get('/:slug', (req, res, next) => blogController.findBySlug(req, res, next));
router.post('/', authenticate, validate(createBlogSchema), (req, res, next) => blogController.create(req, res, next));
router.put('/:id', authenticate, validate(updateBlogSchema), (req, res, next) => blogController.update(req, res, next));
router.delete('/:id', authenticate, (req, res, next) => blogController.delete(req, res, next));

export default router;
