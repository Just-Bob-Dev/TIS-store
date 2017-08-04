const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  option: {type: String},
  price: {type: String}
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
