const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:manage@clusterlibrary.wgitnvq.mongodb.net/clusterlibrary?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/LibraryBook');

const Schema = mongoose.Schema;

var NewUserSchema = new Schema({

    username : String,
    password :String
});

var Userdata = mongoose.model('user', NewUserSchema);

module.exports = Userdata;