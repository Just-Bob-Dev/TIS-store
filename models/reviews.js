const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({

  name: {type: String},
  rating: {type: Number},
  review: {type: String},
  parent_id: {type: String}

})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
