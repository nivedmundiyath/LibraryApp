const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:manage@clusterlibrary.wgitnvq.mongodb.net/clusterlibrary?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect('mongodb+srv://administrator:Minnal@Murali2022@clusternived.pm04sfd.mongodb.net/?retryWrites=true&w=majority');

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;