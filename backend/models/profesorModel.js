const {Schema, model} = require('mongoose');

const alumnoSchema = new Schema({
    nombreCompleto: {type: String, required: true},
    edad: {type: Number, required: true},
    tipoDiscapacidad: {type: String, required: true},
});

const profesorSchema = new Schema({
    email: {type: String, required: true},
    nombreCompleto: {type: String, required: true},
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    telefono: {type: Number, required: true},
    alumnos: [{ type: Schema.Types.ObjectId, ref: 'Alumno' }],
});

const Alumno = mongoose.model('Alumno', alumnoSchema);
const Profesor = mongoose.model('Profesor', profesorSchema);

module.exports = {Alumno, Profesor};