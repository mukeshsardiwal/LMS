import express from 'express';
import upload from '../configs/multer.js';
import {protectEducator} from '../middlewares/authMiddleware.js';
import { updateRoleToEducator,addCourse,getEducatorCourses,educatorDashboardData,getEnrolledStudentsData} from '../controllers/educatorController.js';


const educatorRouter = express.Router();

// Add Educator Role with Clerk Middleware for authentication
educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse);
educatorRouter.get('/courses',protectEducator,getEducatorCourses);
educatorRouter.get('/dashboard',protectEducator,educatorDashboardData);
educatorRouter.get('/enrolled-students',protectEducator,getEnrolledStudentsData);

export default educatorRouter;
