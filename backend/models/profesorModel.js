const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const alumnoSchema = new Schema({
    nombreCompleto: {type: String, required: true},
    edad: {type: Number, required: true},
    tipoDiscapacidad: {type: String, required: true},
});

const profesorSchema = new Schema({
    Nombre: {type: String, required: true},
    ApellidoPaterno: {type: String, required: true},
    ApellidoMaterno: {type: String, required: true},
    email: {type: String, required: true},
    Usuario: {type: String, required: true},
    password: {type: String, required: true},
    Telefono: {type: Number, required: true},
    alumnos: [{ type: Schema.Types.ObjectId, ref: 'Alumno' }],
});

const Profesor = mongoose.model('Profesor', profesorSchema);
const Alumno = mongoose.model('Alumno', alumnoSchema);


module.exports = {Alumno, Profesor};