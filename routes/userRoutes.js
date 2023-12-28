const express = require('express');
const userRouter = express.Router();
const {userSignin , userSignup , userGetMe} = require('../controllers/userController')

userRouter.post('/signup' , userSignin);
userRouter.post('/signin' , userSignup);
userRouter.get('/getme' , userGetMe);


module.exports = userRouter;