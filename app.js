const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

//commect to mongo db
const dbURI = 'mongodb+srv://netninja:123454321@blogweb.zjzy2p0.mongodb.net/blog-web?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err)=>console.log(err));

//register view engine
app.set('view engine','ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
res.redirect('/blogs');
});

app.get('/about', (req, res) => {
res.render('about', { title: 'About' });
});

//blog routes 
app.use('/blogs',blogRoutes);



// 404 page
app.use((req, res) => {
res.status(404).render('404', { title: '404' });
});