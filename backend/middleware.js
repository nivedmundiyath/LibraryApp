// Part 2 Point 7To validate the JWT token. Authentication added only for post, put and delete methos 
const jwt = require('jsonwebtoken');
const express = require('express'); 





module.exports= (req,res, next) => {
    // console.log(req.headers.cookie);
    try {
    const token = req.headers.cookie.split("=")[1];
    // console.log(token);


    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    next();
    
} catch(error) {
        // return res.status(401).json({
        //     message: 'Auth Failed'
        // });
        res.redirect("/login");

}

};
