const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const ConnectDB = require('./servers/database/connection');
const blogRoutes = require('./servers/routes/blogRoutes');


const app = express();

dotenv.config();
const port = process.env.PORT || 8000;

// database
ConnectDB();


// set views engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/public/uploads', express.static('public/uploads'));
app.use(morgan('dev'));
app.use(express.json());


// routes
app.get('/', (req, res) => {
    res.redirect('blogs');
});

// about page
app.get('/about', (req, res) => {
    res.render('about',{title:'About'})
})

// blog route
app.use(blogRoutes);


// 404 page
app.use((req, res) => {
    res.render('404',{title:'404'});
})

// listen on port 
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});