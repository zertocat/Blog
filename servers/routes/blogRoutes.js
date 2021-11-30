const express = require('express');
const Router = express.Router();
const blogController = require('../controllers/blogController')

// blog routes
Router.get('/blogs', blogController.blog_index);
// create new blogs 
Router.get('/blogs/create', blogController.blog_create_get);
Router.post('/blogs', blogController.blog_create_post);
// get blogs by id
Router.get('/blogs/:id', blogController.blog_details);
// delete blogs by id
Router.delete('/blogs/:id', blogController.blog_delete)

module.exports = Router;