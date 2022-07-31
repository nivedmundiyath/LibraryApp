const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');
// const Token = require('../model/Token')
signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
        //Part 2 Point 10
        "uid":req.query['uid'],
        "pwd":req.query['pwd']
     


    };
    console.log(req.body);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

// signupRouter.post("/adduser", function(req,res) {

//     const userJwt = new Token({
//         email : req.body.email,
//         password: req.body.password
//     });

//     userJwt.save();
//     res.redirect("/login");




// })

module.exports = signupRouter;