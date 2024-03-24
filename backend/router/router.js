const express = require('express');
const loginController = require('../controllers/loginController');
const verifyToken  = require('../helper/verifyToken')
const alumnoController = require('../controllers/Alumno')

const router = express.Router();

router.post("/registrar-profesor", loginController.registrar);
router.post("/login-profesor", loginController.login);
router.post("/registrar-alumno",verifyToken, alumnoController.registrarAlumno);
router.post("/list-alumnos",verifyToken, alumnoController.ListAlumnos);
router.post("/see-alumno",verifyToken, alumnoController.SeeAlumno);
router.get("/alumno/:alumnoId", verifyToken, alumnoController.ConAlumno);
module.exports = router;