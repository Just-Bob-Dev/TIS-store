const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  label: {type: String},
  id:{type: String},
  optionPull: {type: String},
  image_before: {type: String},
  image_after: {type: String},
  product_description: {type: String}
})

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;
