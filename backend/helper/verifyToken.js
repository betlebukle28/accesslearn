const jwt = require('jsonwebtoken');
const {Profesor} = require('../models/profesorModel');
const verifyToken =  async(req, res, next) => {
    // Obtener el token del header de la solicitud
    const token = req.headers['authorization'];

    // Verificar si no hay token
    if (!token) return res.status(403).json({ message: 'Se requiere un token para autenticación' });

    try {
        // Verificar el token
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.usuarioId = decoded.id;
        const profesor = await Profesor.findOne({ Usuario });

        if (!profesor) {
            res.status(401).json({ message: 'Token inválido' });
        }
        next(); 
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = verifyToken;
