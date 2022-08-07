const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:manage@clusterlibrary.wgitnvq.mongodb.net/clusterlibrary?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect('mongodb://localhost:27017/LibraryBook');

const Schema = mongoose.Schema;

var newBookSchema = new Schema({

    name: String,
    authorName: String,
    description: String,
    starRating: Number,
    imageUrl: String



})

var bookData = mongoose.model('newBook', newBookSchema);

module.exports = bookData;
