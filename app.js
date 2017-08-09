const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const apiRouter = require("./routes/api");
const Product = require('./models/product.js');
const Friend = require("./models/friends.js");
const Post = require("./models/posts.js");
const Like = require("./models/likes.js");
const Comment = require('./models/comment.js');
const Option = require('./models/options.js');
const Review = require('./models/reviews.js');
const expressValidator = require('express-validator');
const app = express();

mongoose.connect('mongodb://bobHutch:zembs@ds129003.mlab.com:29003/zoes-before-bros');
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator ());

app.use(express.static('./public'));
app.use('/api', apiRouter);


app.get('/', function(req, res){
  res.send("it's working");
})

app.listen(process.env.PORT || 8080, function(req, res){
  console.log("It works");
})


module.exports = app;
