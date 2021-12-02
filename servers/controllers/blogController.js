const { unlink } = require('fs/promises');
const Blog = require('../models/blog');

// blog_index
const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1 })
        .then((result) => {
            res.render('blogs/index',{title: 'All Blogs',blogs: result})
        })
        .catch((err) => {
        console.log(err);
    })
}

//blog_details
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' })
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blog not found' })
        });
}

// blog_create
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new Blog' });
}

// blog_create_post
const blog_create_post = ((req, res, next) => {    
    const blog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        image: req.body.image,
        body: req.body.body,
    })
    if (req.file) {
        blog.image = req.file.path
    }
    // save data
    blog.save()
            .then((result) => {
            res.redirect('blogs')
        })
        .catch((err) => {
            console.log(err)
        });
});

// blog_delete
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '../' });
        })
        .catch((err) =>{
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
}



        