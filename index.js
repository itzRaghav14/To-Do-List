// setting up express app
const express = require('express');
const app = express();

// including path
const path = require('path');

// declaring port
const port = 8000;

// use express routes
app.use('/', require('./routes'));

// app listening
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`The server is up and running at ${port}`);
});
