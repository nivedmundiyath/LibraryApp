const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
//  Part 2 point 9 - Form html doesnot allow PUT and delete. To overide , used method-overide package

var methodOverride  = require("method-override");
//Part 1 Point 2
const bodyParser= require('body-parser');


const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
//Part 1 Point 3
const homeRouter = require('./src/routes/homerouter');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 
//  Part 2 point 9 

app.use(methodOverride('_method'));

// Connect with DB
// process.env['dBURI'] = 'mongodb+srv://admin:manage@clusterlibrary.wgitnvq.mongodb.net/clusterlibrary?retryWrites=true&w=majority';

const port = process.env.PORT || 3000



app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});



//Part 1 Point 5

//Commented for Heroku deployment

app.listen(port,()=>{
    console.log("Server Ready on 3000");
});