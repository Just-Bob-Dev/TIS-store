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

// Product.create({
//   title: "Lumber Jack",
//   description: "Rather than be clean-shaven, the Lumbersexual has an unkempt beard. The Metrosexual is clean and pretty and well-groomed; the Lumbersexual spends the same amount of money, but looks filthy. Sartorially speaking, a Lumbersexual is a delicate tri-blend of L.L. Bean, Timberlake, and Sears.",
//   package_contents: "This package comes with a base amount of 10 likes per post, 50 extra friends that you will have by the end of the month. Two posts a day.",
//   image_url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiZipipybbVAhURayYKHWCzAlYQjRwIBw&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp9hluLlBBsk&psig=AFQjCNFnjSh9Z13mZ0Oo-veCtYkd9T2MdQ&ust=1501695363916496",
//   price: 24,
//   likes: "10",
//   friends: "50",
//   posts: "2",
//   reviews: [
//   {
//     name: "Bobby Giffin",
//     rating: 4,
//     review: "This was great it saved my social media life."
//   },
//   {
//     name: "Jessica Branson",
//     rating: 5,
//     review: "I always wanted a picture with flanel on."
//   }]
// });


app.get('/', function(req, res){
  res.send("it's working");
})

app.listen(process.env.PORT || 8080, function(req, res){
  console.log("It works");
})


module.exports = app;
