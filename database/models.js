const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productDetails: String,
  productDescription: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;