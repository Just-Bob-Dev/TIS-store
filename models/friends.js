const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  option: {type: String},
  price: {type: String}
})

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
