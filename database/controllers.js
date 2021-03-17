const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');

const access = {
  getAll: async (productId) => {
    // await sequelize.connect();
    try {
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
      return results['dataValues'];
    } catch (err) {
      throw new Error(err);
    }
  },

  getActivity: async (productId) => {
    try {
      const { ProductDescription } = sequelize.models;
      const activity = await ProductDescription.findOne({
        where: { id: productId }
      })
      return activity['dataValues'];
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = access;

