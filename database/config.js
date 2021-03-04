const Sequelize = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: process.env.host,
  dialect: "mysql",
  // operatorsAliases: false
});

module.exports = sequelize;