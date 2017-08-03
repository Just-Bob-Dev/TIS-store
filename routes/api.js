const express = require('express');
const router = express.Router();
const path = require('path');
const Product = require('../models/product.js');
const Comment = require('../models/comments.js');

router.use(express.static(path.join(__dirname, 'public')));


router.get('/products', function(req, res){
  Product.getProducts(function(err, product){
    if(err){
      res.send(err);
    }
    res.json(product);
  })
})

//comments practice to understand pull and pushing infor to a remote repo
router.get('/comments', function(req, res){
  Comment.getComments(function(err, comment){
    if(err){
      res.send(err);
    }
    res.json(comment);
  })
})

router.post('/comments', function(req, res){
  var comment = new Comment();
  comment.author = req.body.author;
  comment.text = req.body.text;

  comment.save(function(err) {
    if(err){
    res.send(err);
    }
    res.json({message: 'Comment successfully Added!'});
  })
})

router.put('/comments/:commentId', function(req, res){
  Comment.findById(req.params.commentId, function(err, comment) {
    if(err){
      res.send(err);
    }
    (req.body.author) ? comment.author = req.body.author : null;
    (req.body.text) ? comment.text = req.body.text : null;
    comment.save(function(err) {
      if(err) res.send(err);
      res.json({message: 'Comment has been updated'});
    })
  });
})

router.delete('/comments/:commentId', function(req, res) {
  Comment.remove({_id: req.params.commentId}, function(err, comment) {
    if(err){
      res.send(err);
    }
    res.json({message: 'Comment has been deleted'})
  });
})
//This is the end of the comment practice section.

router.post('/products', function(req, res){
   product = new Product();
   product.title = req.body.name;
   product.desc = req.body.description;
   product.package_contents = req.body.package_contents;
   product.image_url = req.body.image_url;
   product.price = req.body.price;
   product.likes = req.body.likes;
   product.posts = req.body.posts;
   product.friends = req.body.friends;
   product.review = [];
   product.save(function(err) {
     if(err) {
       res.send(err);
     }
     res.json({message: "A New Product was saved successfully"});
   });
});

router.put('/product/:productId', function(req, res){
  Product.findById(req.params.productId, function(err, product) {
    if(err){
      res.send(err);
    }
    (req.body.title) ? product.title = req.body.title : null;
    (req.body.description) ? product.description = req.body.description : null;
    (req.body.package_contents) ? product.package_contents = req.body.package_contents : null;
    (req.body.image_url) ? product.image_url = req.body.image_url : null;
    (req.body.price) ? product.price = req.body.price : null;
    (req.body.likes) ? product.likes = req.body.likes : null;
    (req.body.posts) ? product.posts = req.body.posts : null;
    (req.body.friends) ? product.friends = req.body.friends : null;

    product.save(function(err) {
      if(err) res.send(err);
      res.json({message: 'Product has been updated'});
    })
  });
})


router.delete('/products/:productId', function(req, res){
  Product.delete({_id: req.params.productId}, function(err, product) {
    if(err){
      res.send(err);
    }
    res.json({"You just deleted a product"});
  })
})


module.exports = router;
