// Este archivo necesita ser modificado para usar Sequelize
const { sequelize, Sequelize } = require(".");
// const personas = require("./Persona")

module.exports = (sequelize, Sequelize) => {
  const usuarios = sequelize.define(
    "usuarios",
    {
        idUsuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPersona: Sequelize.INTEGER,
        nombreUsuario: Sequelize.STRING,
        claveEncriptada: Sequelize.STRING,
        estado: Sequelize.STRING
    },
    {
      freezeTableName: true,
      underscored: true,
      updatedAt: "updated",
      createdAt: "created",
    }
  );

  // Definir la relación con el modelo de Personas
//   usuarios.belongsTo(personas, { foreignKey: 'idPersona', as: 'persona' });

  return usuarios;
};
