const express = require('express');
const userController = require('../Controllers/UserController.js');


const userRouter = express.Router();

userRouter.route('/home').get(userController.home);
userRouter.route('/register').post(userController.registerUser)
userRouter.route('/login').post(userController.userLogin)

module.exports = userRouter;