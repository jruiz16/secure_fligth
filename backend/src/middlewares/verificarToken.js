const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    // Obtener el token del encabezado de la solicitud
    const token = req.headers.authorization;

    // Verificar si el token existe
    if (!token) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    try {
        console.log(token);
        const payload = jwt.verify(token, 'secreto');
        req.username = payload.username;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Token no válido" });
    }
};

module.exports = verificarToken;
