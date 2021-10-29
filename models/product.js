const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  countInStock: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;
