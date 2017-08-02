const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: {type: String},
  text: {type: String}
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
