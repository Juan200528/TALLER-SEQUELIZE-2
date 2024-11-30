const express = require('express');
const router = express.Router();
const EventoController = require('../controller/eventoController');

router.get('/eventos', EventoController.obtenerEventos);
router.post('/eventos', EventoController.crearEvento);
router.put('/eventos/:id', EventoController.actualizarEvento);
router.delete('/eventos/:id', EventoController.eliminarEvento);


module.exports = router;