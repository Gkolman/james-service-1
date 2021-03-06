const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');

// const MaterialSpecifications = require('./models/material_specification_model.js');

const access = {
  getAll: async (productId) => {
    // await sequelize.connect();
    const { ProductDetails, ProductFeatures, ProductDescription, MaterialSpecification, TechnicalDetails, CareInstructions, } = sequelize.models;
    await ProductDetails.associate(sequelize.models)

    const results = await ProductDetails.findOne({
      where: { id: productId },
      include: [
        {
          model: ProductDescription,
        },
        {
          model: ProductFeatures,
        },
        {
          model: MaterialSpecification,
        },
        {
          model: TechnicalDetails,
        },
        {
          model: CareInstructions,
        },
      ],
    });

    console.log(results.dataValues);
    return results;
  }
}

module.exports = access;

