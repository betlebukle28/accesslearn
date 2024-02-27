const express = require('express');
const loginController = require('../controllers/loginController');
const verifyToken  = require('../helper/verifyToken')
const alumnoController = require('../controllers/Alumno')

const router = express.Router();

router.post("/registrar-profesor", loginController.registrar);
router.post("/login-profesor", loginController.login);
router.post("/registrar-alumno ",verifyToken, alumnoController.registrarAlumno);
module.exports = router;