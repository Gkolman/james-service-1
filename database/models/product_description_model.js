const sequelize = require('../config.js')

const ProductDescription = sequelize.define("product_descriptions", {
  id: {
    type: `INTEGER`,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_description: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  article_number: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  activity: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  family: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  gender: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  environmental_information: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  features: {
    type: `STRING`,
    allowNull: true,
    unique: false
  }
});

module.exports = ProductDescription;