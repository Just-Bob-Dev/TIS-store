const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const apiRouter = require("./routes/api");
const Product = require('./models/product.js');
const app = express();

mongoose.connect('mongodb://bobHutch:zembs@ds129003.mlab.com:29003/zoes-before-bros');
var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use('/api', apiRouter);

app.user(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.seetHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  
})

app.get('/', function(req, res){
  res.send("it's working");
})

app.listen(process.env.PORT || 8080, function(req, res){
  console.log("It works");
})


module.exports = app;
