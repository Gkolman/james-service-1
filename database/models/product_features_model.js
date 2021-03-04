const sequelize = require('../config.js')

const ProductFeatures = sequelize.define("product_features", {
  id: {
    type: `INTEGER`,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  featureOne: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  featureTwo: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  featureThree: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  featureFour: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  featureFive: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  featureSix: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  }
});

module.exports = ProductFeatures;