// setting up express app
const express = require('express');
const app = express();

// including path, database, body-parser
const path = require('path');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

// declaring port
const port = 8000;

// middlewares
app.use(bodyParser.urlencoded({extended : false}));
// app.use(express.static('assets'));

// use express routes
app.use('/', require('./routes'));

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// app listening
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`The server is up and running at ${port}`);
});
