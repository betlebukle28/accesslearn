const {Profesor, Alumno} = require('../models/profesorModel');
const {validarRegistro} = require('../helper/validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registrarAlumno = async (req, res) => {
    console.log("registrarAlumno");

    try {
        console.log("registrarAlumno");
        const parametros = req.body;
        console.log("parametros");
        console.log(parametros);
        const profesorId = req.usuarioId || 'idDelProfesor';
        console.log('profesorId: ' + profesorId);
        const nuevoAlumno = new Alumno(parametros);

        const alumnoGuardado = await nuevoAlumno.save();

        await Profesor.findByIdAndUpdate(
            profesorId,  
            { $push: { alumnos: alumnoGuardado._id } },
            { new: true, useFindAndModify: false }
        );
        
        res.status(200).json({
            message: 'Alumno registrado',
            result: alumnoGuardado
        });

    } catch (error) {
        console.error("Error al registrar al Alumno:", error);
        res.status(400).json({ error: error.message });
    }
};
// LISTA DE ALUMNOS
const ListAlumnos = async (req, res) => {
    console.log("ListAlumnos");
    console.log(req.usuarioId);
    const profesorId = req.usuarioId || 'idDelProfesor'; // Este valor debería venir del contexto de autenticación

    try {
        const profesorConAlumnos = await Profesor.findById(profesorId)
            .populate('alumnos') // Esto llenará el campo alumnos con los documentos completos de los alumnos.
            .exec();
        console.log(profesorConAlumnos);

        res.status(200).json({
            message: 'Alumnos Encontrados',
            result: profesorConAlumnos
        });

        } catch (error) {
        throw new Error('Error al obtener los alumnos:', error);
        }
};

const ConAlumno = async (req, res) => {
    console.log("ConAlumno");
    console.log(req.usuarioId);
   // const alumnoId = req.usuarioId || 'idDelAlumno'; // Este valor debería venir del contexto de autenticación

    try {
        const alumnoId = req.params.alumnoId;
        const alumno = await Alumno.findById(alumnoId);
            
        console.log(alumno);
        if (!alumno) {
            return res.status(404).json({ message: 'Alumno no encontrado' });
          }
          res.json(alumno);
        } catch (error) {
          res.status(500).json({ message: 'Error al buscar los datos del alumno', error: error });
        }
};

const SeeAlumno = async (req,res)=>{
    console.log("See alumno");

}




module.exports = {
    registrarAlumno,
    ListAlumnos,
    SeeAlumno,
    ConAlumno
};