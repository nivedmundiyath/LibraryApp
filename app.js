const express = require("express");
const userData = require("./src/model/userData");
const newBook = require("./src/model/newBook");
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json());

// username='admin';
// password='1234';

const port = process.env.PORT || 8080;


const path = require('path');


app.use(express.static('public'));
  app.get('home',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

function verifyToken(req,res,next)
{

  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()

}

app.post('/login', (req, res) => {

  console.log(req.body);

    var mail  = req.body.name;
    var password = req.body.passwd;
    userData.findOne( {username: mail, password: password } , function(error,user){

          if(error)
          {
            res.status(500).send()
          }
          if(!user)
          {
            res.status(401).send('Invalid')
          }
          let payload = {subject: mail+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})


                    })    

      
    })


    app.post('/adduser', function(req,res){


      var newUser = {

                      username: req.body.name,
                      password: req.body.password
      }
      console.log(newUser);

      userData.findOne({username: newUser.username}, function(error, user) {

        console.log(user);
        if(error)
        {
          res.status(500).send()
        }

        if (!user)
        {
          var user = new userData(newUser);
          user.save();
          res.status(200).json({message: "User created successfully"}).send()
        
        }
        else
         res.status(201).json({message: "User already exist"}).send()


      })
      


    });


    app.post('/book',verifyToken, function(req,res){

      var bookdata = {

        name: req.body.name,
        authorName: req.body.authorName,
        description: req.body.description,
        starRating: req.body.starRating,
        imageUrl: req.body.imageUrl
    
      }
      console.log(bookdata);

      var book = new newBook(bookdata);
      book.save();
      res.status(200).json({message: "New book added"}).send()


    })

    app.get('/books',verifyToken,function(req,res){

      newBook.find().then(function(books){
        console.log(books)
        res.status(200).send(books);

      })

    })
    app.get('/book/:id',verifyToken,function(req,res){

      id = req.params.id;


      newBook.findById({"_id":id}).then(function(book){
        console.log(book)
        res.status(200).send(book);

      })

    })

    app.delete('/remove/:id',verifyToken,function(req,res){
      id = req.params.id;

      newBook.findByIdAndDelete({"_id":id})
      .then(()=>{
          console.log('success')
          res.send();
      })
  })

  app.put('/update',verifyToken,(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    bookId= req.body._id,
    bookName = req.body.name,
    authorName = req.body.authorName,
    description = req.body.description,
    starRating = req.body.starRating,
    imageUrl = req.body.imageUrl
   newBook.findByIdAndUpdate({"_id":id},
                                {$set:{"_id":bookId,
                                "name":bookName,
                                "authorName":authorName,
                                "description":description,
                                "starRating":starRating,
                                "imageUrl":imageUrl}})
   .then(function(){
    res.status(200).json({message: " Book updated"}).send()   })
 })    
app.listen(port, function(){
    console.log('listening to port '+port);
});

