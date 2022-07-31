const express = require('express'); 
const homeRouter = express.Router();
const checkAuth = require('../../middleware')
homeRouter.get('/',function(req,res){

    res.render('home',{});
    
})







module.exports = homeRouter;