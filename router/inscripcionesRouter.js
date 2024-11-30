const express = require('express');
const router = express.Router();
const InscripcionController = require('../controller/inscripcionesController');

router.post('/inscripciones', InscripcionController.inscribirUsuario);
router.put('inscripciones/:id', InscripcionController.cancelarInscripcion);
router.get('/inscripciones', InscripcionController.obtenerInscripciones);

module.exports = router;