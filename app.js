var chalk = require("chalk");
const express = require("express");
var signin = express.Router();
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
    {
        link:'/signin',
        name:'Log In'
    },
    {
        link:'/signup',
        name:'Sign Up'
    },
];

var booksRouter = require('./src/routes/bookRoutes')(nav);
var authorsRouter = require('./src/routes/authorRoutes')(nav);

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signin);
app.use('/signup',signup);

app.get('/',function(req,res){
    res.render('index.ejs',
    {
        title:'Library',
        nav
    });
});

signin.get('/',function(req,res){
    res.render('signin',
    {
        title:'Log In',
        nav
    });
});


app.listen(5000);