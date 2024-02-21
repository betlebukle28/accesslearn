const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post("/registrar-profesor", loginController.registrar);
router.post("/login-profesor", loginController.login);

module.exports = router;