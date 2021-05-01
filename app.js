var chalk = require("chalk");
const express = require("express");
var login = express.Router();
var signup = express.Router();

var app = new express();
const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Author'
    },
];

const nav_books = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Author'
    },
    {
        link:'/add_book',
        name: 'Add Book'
    }
];

const nav_authors = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Author'
    },
    {
        link:'/add_author',
        name: 'Add Author'
    }
];


var booksRouter = require('./src/routes/bookRoutes')(nav_books);
var authorsRouter = require('./src/routes/authorRoutes')(nav_authors);

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',login);
app.use('/signup',signup);

app.get('/',function(req,res){
    res.render('index.ejs',
    {
        title:'Library',
        nav,
    });
});

login.get('/',function(req,res){
    res.render('login',
    {
        title:'Log In',
        nav
    });
});


app.listen(5000);