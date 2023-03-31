// require the library
const mongoose = require('mongoose');

// conntect to database
mongoose.connect('mongodb://127.0.0.1:27017/to-do-list-db');

// acquire the connection
const db = mongoose.connection;

// checking for error
db.on('error', function(err){
    console.log(`Error in connecting to database : ${err}`);
});

// notifying once connected
db.once('open', function(){
    console.log('Successfully connected to the database');
})

module.exports = db;
