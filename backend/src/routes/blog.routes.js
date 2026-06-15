import express from 'express';
import { getApprovedBlogs, getBlogById } from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getApprovedBlogs);
router.get('/:id', getBlogById);

export default router;
