// Archivo para inicializar y sincronizar los modelos Sequelize
const Sequelize = require('sequelize');
const config = require('../../config/config');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.usuarios = require("./Usuario.js")(sequelize, Sequelize);
db.personas = require("./Persona.js")(sequelize, Sequelize);
module.exports = db;
