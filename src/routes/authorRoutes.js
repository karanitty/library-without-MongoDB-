const express = require('express');
const authorsRouter = express.Router();
function routers(nav){
    var authors = [
        {
            name:"Joseph Barbara",
            novel:"Tom and Jerry",
            image:"3de1f41c7132e12b923d2d0c17bbf813.jpg",
            description:""
        },
        {
            name:"J K Rowling",
            novel:"Harry Potter",
            image:"191219-j-k-rowling-2018-ac-845p_b96cd21ada5eec6c9ff8b9ff33920b0f.jpg",
            description:""
        },
        {
            name:"Chetan Bhagat",
            novel:"Half Girlfriend",
            image:"1451400853-7826.jpg",
            description:""
        }
    ];

    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Authors',
            authors
        });
    })

    // authorsRouter.get('/:i',function(req,res){
    //     var i = req.params.i;
    //     req.render("author.ejs"
    //     {
    //         nav,
    //         title:'Authors',
    //         author:authors[i]
    //     });
    // });

    authorsRouter.get('/:i',function(req,res){
        var i = req.params.i;
        res.render('author.ejs',
        {
            nav,
            title:'Authors',
            author:authors[i]
        });
    });


    return authorsRouter;
}

module.exports = routers;