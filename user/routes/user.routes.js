const express=require("express");
const router=express.Router();
const userController=require('../controllers/user.controllers.js')
const authMiddleware=require('../midlleware/auth.middleware.js')

router.post('/register',userController.register)
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/profile', authMiddleware.userAuth,userController.profile);
router.get('/accepted-ride',authMiddleware.userAuth, userController.acceptedRide);
module.exports=router;