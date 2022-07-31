const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/user');
const jwt = require('jsonwebtoken'); // Point 2 Point 7- Implemented JWT for authorization - Only for POST, PUT and DELETE method


loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.get("/check",function(req,res){
    var checkuser = {
                //Part 2 Point 10

        // uid:req.params("uid"),
        // pwd:req.params("pwd")
        "uid":req.query['uid'],
        "pwd":req.query['pwd']

    };
    
    console.log(checkuser);
    var flag=false;

//    var flagg = user.find((e)=>{
       for(let i=0;i<user.length;i++){
        
        if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd)
        {
            
            flag=true;
            break;
        }
        else{
                flag=false;
            }
        };

        console.log(flag);

if(flag==true){
    //Generating Token - expiry in 90s
     const jwtToken= jwt.sign({id : checkuser.uid}, 
        "secret",
        {
            expiresIn: 90
        }
        
        );
    // alert("User Verified.Click to continue");
    // console.log(jwtToken);
    res.cookie('authorization', jwtToken , {maxAge: 90000});  
    res.redirect("/home");
}
else{
    // alert("User Verification Failed");
    res.redirect("/signup");
}

});



module.exports = loginRouter;