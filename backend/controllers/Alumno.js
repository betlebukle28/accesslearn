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

//CONSULTAR ALUMNO
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

const UpdateAlumno = async (req,res) =>{

    try {
        console.log("UpdateAlumno");
        const alumnoId = req.params.alumnoId; // Asumiendo que el ID del alumno viene en req.usuarioId
        const updateData = req.body; // Los datos a actualizar deberían venir en el cuerpo de la solicitud (req.body)
        console.log('ALUMNO ID: ', alumnoId);
        console.log('updateData: ', updateData);
        // Actualizando el alumno
        const updatedAlumno = await Alumno.findOneAndUpdate({ _id: alumnoId }, updateData, { new: true }); // `new: true` devuelve el documento actualizado

        if (!updatedAlumno) {
            return res.status(404).json({ message: 'Alumno no encontrado', result: updatedAlumno });
        }

        // Enviar respuesta con el alumno actualizado
        res.status(200).json({
            message: 'Alumno actualizado con éxito',
            result: updatedAlumno
        });
    } catch (error) {
        console.error('Error al actualizar alumno:', error);
        res.status(500).json({ message: 'Error al actualizar el alumno' });
    }

};




module.exports = {
    registrarAlumno,
    ListAlumnos,
    SeeAlumno,
    ConAlumno,
    UpdateAlumno
};