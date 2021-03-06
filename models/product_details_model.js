module.exports = (sequelize, DataTypes) => {

  const ProductDetails = sequelize.define('product_details', {
    product_details: DataTypes.STRING,
  }, {});

  return ProductDetails;
};