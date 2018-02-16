var express = require('express');
var app = express();
var logger = require("winston-color");
var mongoose = require('mongoose');
var bodyParser      = require('body-parser');


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

//connect mongodb
mongoose.connect('mongodb://localhost/test');

var portNo = 8001;

app.use('/', require('./config/routeConfig')); // configure our routes

app.listen(portNo);
logger.info('app is running in the port ' + portNo); 