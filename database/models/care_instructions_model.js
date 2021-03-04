const sequelize = require('../config.js')

const CareInstructions = sequelize.define("care_instructions", {
  id: {
    type: `INTEGER`,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  washing: {
    type: `STRING`,
    allowNull: true,
    unique: false,
  },
  dry_cleaning: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  bleaching: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  drying: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  ironing: {
    type: `STRING`,
    allowNull: true,
    unique: false
  },
  additional_care_instructions: {
    type: `STRING`,
    allowNull: true,
    unique: false
  }
});

module.exports = CareInstructions;