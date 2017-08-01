const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/iron_store');
var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));


app.listen(3000, function(req, res){
  console.log("It works");
})
