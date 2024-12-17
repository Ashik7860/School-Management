const express=require('express');
const router =express.Router();

const studentService=require('../controllers/studentDetails/studentService');
const authMiddleware=require('../middleware/authMiddleware');



router.post("/studentDetails",studentService.viewStudentProfile);

module.exports =router;

