const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController')

Router.post('/user/register', authController.register);
Router.post('/user/login', authController.login);

module.exports = Router;