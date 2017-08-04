const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  option: {type: String},
  price: {type: String}
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
