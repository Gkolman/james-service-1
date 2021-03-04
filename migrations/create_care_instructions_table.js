'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('care_instructions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      washing: {
        type: Sequelize.STRING,
        allowNull: true
      },
      dry_cleaning: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bleaching: {
        type: Sequelize.STRING,
        allowNull: true
      },
      drying: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ironing: {
        type: Sequelize.STRING,
        allowNull: true
      },
      additional_care_instructions: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('care_instructions');
  }
};