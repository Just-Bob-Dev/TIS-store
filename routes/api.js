const express = require('express');
const router = express.Router();
const path = require('path');
const Product = require('../models/product.js');


router.use(express.static(path.join(__dirname, 'public')));


router.get('/products', function(req, res){
  Product.getProducts(function(err, product){
    if(err){
      res.send(err);
    }
    res.json(product);
  })
})

router.post('/products', function(req, res){
  var title = req.body.name;
  var desc = req.body.description;
  var package_contents = req.body.package_contents;
  let image_url = req.body.image_url;
  let price = req.body.price;
  let likes = req.body.likes;
  let posts = req.body.posts;
  let friends = req.body.friends;
  let name = req.body.name;
  let rating = req.body.rating;
  let review = req.body.review
  console.log(title);

  Product.create({
    title: title,
    description: desc,
    package_contents: package_contents,
    image_url: image_url,
    price: price,
    likes: likes,
    posts: posts,
    friends: friends,
    reviews: [
    {
      name: name,
      rating: rating,
      review: review
    }]
  }
  ).then(function(){
    res.redirect('/api/products');
  })
});

router.put('/products/:productId', function(req, res){
  let proId = req.params.productId;
  let productUpdate = req.body;
  Product.updateProduct(proId, productUpdate, {}, function(err, productUpdate){
    if(err){
      console.log(err);
    }
    res.json(productUpdate);
  })
})

router.put('/products/reviews/:productId', function(req, res){
  let proId = req.params.productId;
  let productReview = req.body;
  Product.updateProductReviews(proId, productReview, {}, function(err, productReview){
    if(err){
      console.log("This is a PUT error:  " + err);
    }
    res.json(productReview);
  })
})

router.delete('/products/:productId', function(req, res){
  console.log("your in the right route.")
  let proId = req.params.productId;
  console.log(proId);
  if (proId.match(/^[0-9a-fA-F]{24}$/)) {
    Product.remove({_id: proId}).then(function(err){
      if(err){
        console.log("Deletion error: " + err);
      }
      res.redirect('/api/products');
    })
  }
})


module.exports = router;
