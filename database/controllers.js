const mongoose = require(`mongoose`);
const path = require('path');
const db = require(path.resolve(__dirname + '/database.js'));

const connection = mongoose.connection;
const controllers = {
  addProduct: async (product) => {
    const { productName, productPrice } = product;
    const test = await new Product({ productName: productName, productPrice: productPrice });
    test.save();
    return test;
  },
  getProductByType: async (product) => {
    const { productType } = product;
    const products = Product.find({ type: productTyoe});
    return products;
  }
}

module.exports = controllers;