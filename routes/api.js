const express = require('express');
const router = express.Router();
const path = require('path');
const Product = require('../models/product.js');
const Comment = require('../models/comment.js');
const Friend = require('../models/friends.js');
const Post = require('../models/posts.js');
const Like = require('../models/likes.js');
const Review = require('../models/reviews.js');
const Option = require('../models/options.js')
const ObjectID = require('mongodb').ObjectID;

function buildOptionLayout(object, res, callback) {
  while(object.length === 0){
    let i = 0;
  }
  console.log("after while loop");
  console.log(object.length);
  let json = object;
  let tempObj = {};
  tempObj.questions = object.questions;
  console.log('we are in build');
  for(let i = 0; i < json.questions.length; i++){
    console.log(json.questions.optionPull);
    if(json.questions[i].optionPull === "Likes"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Likes;
      console.log(tempObj);
    }
    else if(json.questions[i].optionPull === "Friends"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Friends;
      console.log(tempObj);
    }
    else if(json.questions[i].optionPull === "Posts"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Posts;
      console.log(tempObj);
    }
    else if(json.questions[i].optionPull === "Comments"){
      tempObj.questions[i] = {
        _id: json.questions[i]._id,
        label: json.questions[i].label,
        optionPull: json.questions[i].optionPull,
        __v: json.questions[i].__v,
        options: []
      }
      tempObj.questions[i].options = json.Comments;
      console.log(tempObj);
    }
  }
  console.log(tempObj);
  callback(res, tempObj);
}




router.use(express.static(path.join(__dirname, 'public')));

//GET for products/likes/comments/friends/options/posts/ reviews/ and users.
router.get('/products', function(req, res){
  Product.getProducts(function(err, product){
    if(err){
      res.send(err);
    }
    res.send({results: product});
  })
})

//get reviews
router.get('/reviews', function(req, res) {
  Review.find(function(err, review) {
    if(err) {
      res.send(err);
    }
    res.json({results: review});
  })
})

//get options for dropDown list
router.get('/options', function(req, res) {
  Option.find(function(err, option) {
    if(err) res.send(err);
    res.json({results: option});
  })
})

//get likes options
router.get('/likes', function(req, res) {
  Like.find(function(err, like) {
    if(err) res.send(err);
    res.json({results: like});
  })
})

//get posts options
router.get('/posts', function(req, res) {
  Post.find(function(err, post) {
    if(err) res.send(err);
    res.json({results: post});
  })
})

//get friends options
router.get('/friends', function(req, res) {
  Friend.find(function(err, friend) {
    if(err) res.send(err);
    res.json({results: friend});
  })
})


//Michaels custom endpoint!
var json={};

router.get("/options-labels",function(req, res) {
  Option.find(function(err, options){
    Like.find(function(err, like) {
      Post.find(function(err, post) {
        Comment.find(function(err, comment) {
          Friend.find(function(err, friend) {
            json.questions = options;
            json.Likes = like;
            json.Posts = post;
            json.Comments = comment;
            json.Friends = friend;
            console.log(json);

            buildOptionLayout(json, res, function(res, response) {
              res.json({results: response});
            })
          })
        })
      })
    })
  })
})

router.post('/products', function(req, res){
   product = new Product();
   product.title = req.body.title;
   product.desc = req.body.description;
   product.package_contents = req.body.package_contents;
   product.image_url = req.body.image_url;
   product.price = req.body.price;
   product.likes = req.body.likes;
   product.posts = req.body.posts;
   product.friends = req.body.friends;
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
    res.json({message: "You just deleted a product"})
  });
})

router.get('/options', function(req, res) {
  Option
})




module.exports = router;





//comments practice to understand pull and pushing infor to a remote repo
// router.get('/comments', function(req, res){
//   Comment.getComments(function(err, comment){
//     if(err){
//       res.send(err);
//     }
//     res.json(comment);
//   })
// })
//
// router.post('/comments', function(req, res){
//   var comment = new Comment();
//   comment.author = req.body.author;
//   comment.text = req.body.text;
//
//   comment.save(function(err) {
//     if(err){
//     res.send(err);
//     }
//     res.json({message: 'Comment successfully Added!'});
//   })
// })
//
// router.put('/comments/:commentId', function(req, res){
//   Comment.findById(req.params.commentId, function(err, comment) {
//     if(err){
//       res.send(err);
//     }
//     (req.body.author) ? comment.author = req.body.author : null;
//     (req.body.text) ? comment.text = req.body.text : null;
//     comment.save(function(err) {
//       if(err) res.send(err);
//       res.json({message: 'Comment has been updated'});
//     })
//   });
// })
//
// router.delete('/comments/:commentId', function(req, res) {
//   Comment.remove({_id: req.params.commentId}, function(err, comment) {
//     if(err){
//       res.send(err);
//     }
//     res.json({message: 'Comment has been deleted'})
//   });
// })
//This is the end of the comment practice section.
