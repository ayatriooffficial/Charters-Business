import express from 'express';
import { getApprovedBlogs } from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getApprovedBlogs);

export default router;
