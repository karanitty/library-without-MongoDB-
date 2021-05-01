const express = require("express");
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: "Tom and Jerry",
            author: "Joseph Barbara",
            genre : "Cartoon",
            image: "TomandJerryTitleCardc.jpg"
        },
        {
            title: "Harry potter",
            author: "J K Rowling",
            genre : "Fantasy",
            image: "images.jpg"
        },
        {
            title: "Half Girlfriend",
            author: "Chetan Bhagat",
            genre : "Romance",
            image: "712HEn9SNwL.jpg"
        }
    ];
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    })
    
    booksRouter.get('/:i',function(req,res){
        var i = req.params.i;
        res.render('book.ejs',
        {
            nav,
            title:'Library',
            book:books[i]
        });
    });

    return booksRouter;
}


module.exports = router;