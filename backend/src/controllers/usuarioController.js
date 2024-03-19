// Este archivo puede permanecer igual
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const db = require("../models");
const Usuarios = db.usuarios;

exports.obtenerUsuarios = async (req, res) => {

    try {
        const consulta = `
            SELECT usuarios.*, personas.*
            FROM usuarios
            INNER JOIN personas ON usuarios.id_persona = personas.id_persona
        `;
            
        const usuarios = await db.sequelize.query(consulta, { type: db.sequelize.QueryTypes.SELECT });
        
        res.send(usuarios);
    } catch (error) {
        console.log(error);
    }

};


exports.autenticarUsuario = async  (req, res) => {
    const { nombreUsuario, clave } = req.body;

    try {
        // Buscar al usuario por nombre de usuario en la base de datos
        console.log(nombreUsuario);
        const usuario = await Usuarios.findOne({ where: { nombre_usuario: nombreUsuario} });

        if (!usuario) {
            return res.status(401).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verificar si el usuario existe y si la contraseña es válida
        // if (!usuario || !bcrypt.compareSync(clave, usuario.claveEncriptada)) {
        if (!usuario || clave != usuario.claveEncriptada) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Generar token de autenticación
        const token = jwt.sign({ id: usuario.idUsuario }, 'secreto', { expiresIn: '1h' });

        // Enviar el token como respuesta
        res.json({ token });
    } catch (error) {
        console.error('Error al autenticar usuario:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};