// Este archivo necesita ser modificado para usar Sequelize
const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const personas = sequelize.define(
    "personas",
    {
        idPersona: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        apellido: Sequelize.STRING,
        email: Sequelize.STRING,
        telefono: Sequelize.STRING
    },
    {
      freezeTableName: true,
      underscored: true,
      updatedAt: "updated",
      createdAt: "created",
    }
  );
  return personas;
};