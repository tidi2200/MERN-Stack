
import express from 'express';
import { createCourse, getAllCourse } from '../controllers/courseController.js';

const router = express.Router();
router.post('/courses', createCourse);
router.get('/courses', getAllCourse);

export default router;