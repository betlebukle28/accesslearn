const {Profesor, Alumno} = require('../models/profesorModel');
const {validarRegistro} = require('../helper/validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registrarAlumno = async (req, res) => {

    try {
        const parametros = req.body;
        console.log(parametros);
        const nuevoAlumno = new Alumno(parametros);
        
        await nuevoAlumno.save()
        .then((result) => {
            res.status(200).json({
                message: 'Alumno registrado',
                result: result
            });
        }).catch((error) => {
            res.status(400).json({
                message: 'Error al registrar al Alumno',
                error: error.message
            });
        });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    registrarAlumno
};