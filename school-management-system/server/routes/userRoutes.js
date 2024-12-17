const express=require('express');
const router =express.Router();

const userService=require('../controllers/userService/userService');
const authMiddleware=require('../middleware/authMiddleware');


router.post("/create",authMiddleware,userService.createUser);
router.post("/change-password",authMiddleware,userService.changePassword);
router.post("/signin",userService.signinUser);
router.post("/deleteUser",userService.deleteUser,);

module.exports =router;

