const sequelize = require('../config.js')

const ProductDetails = sequelize.define("product_details", {
  id: {
    type: `INTEGER`,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_details: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  }
});

module.exports = ProductDetails;