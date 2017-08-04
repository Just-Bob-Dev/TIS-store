const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  option: {type: String},
  price: {type: String}
})

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
