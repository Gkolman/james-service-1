module.exports = (sequelize, DataTypes) => {
  const CareInstructions = sequelize.define('care_instructions', {
    productId: DataTypes.INTEGER,
    washing: DataTypes.STRING,
    dry_cleaning: DataTypes.STRING,
    bleaching: DataTypes.STRING,
    drying: DataTypes.STRING,
    ironing: DataTypes.STRING,
    additional_care_instructions: Sequelize.STRING
  }, {})
  return CareInstructions;
};