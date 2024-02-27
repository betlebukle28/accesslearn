const {Profesor} = require('../models/profesorModel');
const {validarRegistro} = require('../helper/validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registrar = async (req, res) => {
    try{
        const parametros = req.body;
        console.log(parametros);
        validarRegistro(parametros);
        console.log(parametros);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(parametros.password, salt);

        const nuevoProfesor = new Profesor(parametros);
        nuevoProfesor.password = hashedPassword;
        
        await nuevoProfesor.save()
        .then((result) => {
            res.status(200).json({
                message: 'Profesor registrado',
                result: result
            });
        }).catch((error) => {
            res.status(400).json({
                message: 'Error al registrar profesorsss',
                error: error.message
            });
        });
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}


const login = async (req, res) => {
    try {
        const { Usuario, password } = req.body;
        const profesor = await Profesor.findOne({ Usuario });

        if (!profesor) {
            throw 'Usuario no encontrado';
        }
        else {
            console.log("Usuario Encontrado")
        }

        const comparar = await bcrypt.compare(password, profesor.password);

        if (!comparar) {
            throw 'Contraseña incorrecta', password;
        }
        else {
            console.log("Contraseña correcta")
        }

        const token = jwt.sign({ id: profesor._id }, 'your_jwt_secret', { expiresIn: '1h' });
        // En tu backend
        // const token = jwt.sign({ id: profesor._id }, 'your_jwt_secret', { expiresIn: '10s' });


        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: token
        });
    } catch (error) {
        res.status(400).json({ message: error, error: error.message });
    }
}

module.exports = {
    registrar,
    login
};