var express=require("express");
var JWT= require('jsonwebtoken');
var userRouter=express.Router();

var UserController=require("../controllers/user.controller");

userRouter.post('/register',UserController.registerUser);
userRouter.post('/login',UserController.loginUser);
userRouter.post('/checkusername',UserController.checkUsername);


module.exports=userRouter;