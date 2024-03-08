const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const alumnoSchema = new Schema({
    nombreCompleto: {type: String, required: true},
    edad: {type: Number, required: true},
    genero:{  type: String, required: true  },
    SePuedeSentar:{  type: Boolean, required: true  },
    Percepcionauditiva : {type: String, required: true},
    Percepcionvisual: {type: String, required: true},
    Discriminacion: {type: String, required: true},
    Direccion: {type: String, required: true},
    Coordinacion: {type: String, required: true},
    Prension: {type: String, required: true},
    Presion: {type: String, required: true},
    Atencion: {type: String, required: true},
    Asociacion: {type: String, required: true},
    Seleccion: {type: String, required: true},
    Clasificacion: {type: String, required: true},
    Denominacion: {type: String, required: true},
    Generalizacion: {type: String, required: true},
    Notas: {type: String, required: true},
    TipoAprendizaje: {type: String, required: true}
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