const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController');
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization
} = require('../controllers/verifyToken');

Router.put('/user/update/:id',verifyToken,verifyTokenAndAdmin , userController.Update);
Router.delete('/user/delete/:id',verifyTokenAndAdmin, userController.Delete);
Router.get('/user/find/:id',verifyTokenAndAdmin, userController.getUser);
Router.get('/user/find',verifyTokenAndAdmin,userController.getAllUser);

module.exports = Router;