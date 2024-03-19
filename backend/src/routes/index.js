// Este archivo puede permanecer igual
const express = require('express');
const router = express.Router();

const autenticacionController = require('../controllers/autenticacionController');
const usuarioController = require('../controllers/usuarioController');

router.get('/autenticar', autenticacionController.autenticarUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);

module.exports = router;
