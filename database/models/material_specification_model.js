const sequelize = require('../config.js')

const MaterialSpec = sequelize.define("material_specification", {
  id: {
    type: `INTEGER`,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  material: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  lining: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  filling: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  legal_notice: {
    type: `STRING`,
    allowNull: true,
    unique: false
  }
});

module.exports = MaterialSpec;