// const Sequelize = require('sequelize');
// const sequelize = require('../config.js').sequelize;

// const MaterialSpec = sequelize.define("material_specification", {
// });

module.exports = (sequelize, DataTypes) => {
  const MaterialSpecifications = sequelize.define('material_specifications', {
    material: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    lining: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    filling: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    legal_notice: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {})

  return MaterialSpecifications;
}

// module.exports = MaterialSpec;