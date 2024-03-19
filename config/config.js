module.exports = {
    HOST: "mysql-service",
    USER: "admin",
    PASSWORD: "root",
    DB: "prueba",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000,
    },
  };