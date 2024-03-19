module.exports = (app) => {
    const usuarios = require("../controllers/usuarioController");
    const verificarToken = require('../middlewares/verificarToken');
    const router = require("express").Router();
    router.get("/listarUsuarios", verificarToken, usuarios.obtenerUsuarios);
    router.post("/autenticarUsuario", usuarios.autenticarUsuario);

    app.use("/api", router);
  };
  