const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  label: {type: String},
  optionPull: {type: String}
})

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;
