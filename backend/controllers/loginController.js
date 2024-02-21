const Profesor = require('../models/profesorModel');
const validarRegistro = require('../helper/validator');

const registrar = async (req, res) => {
    try{
        const parametros = req.body;
        validarRegistro(parametros);

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
                message: 'Error al registrar profesor',
                error: error
            });
        });
    }catch(error){
        res.status(400).json({ message: 'Error al registrar usuario' });
    }
}


const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const profesor = await Profesor.findOne({ usuario });

        if (!profesor) {
            throw 'Usuario no encontrado';
        }

        const comparar = await bcrypt.compare(password, profesor.password);

        if (!comparar) {
            throw 'Contraseña incorrecta';
        }

        const token = jwt.sign({ id: profesor._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: token
        });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports = {
    registrar,
    login
};