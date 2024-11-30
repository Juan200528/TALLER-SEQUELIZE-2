const Inscripcion = require('../models/inscripcionesModels');
const Evento = require('../models/eventosModels');

class InscripcionService {
    static async inscribirUsuario(data) {
        const evento = await Evento.findByPk(data.eventoId);
        if (!evento) throw new Error('No hemos encontrado evento');

        const inscripciones = await Inscripcion.count({ where: { eventoId: data.eventoId } });
        if (inscripciones >= evento.capacidadMaxima) {
           
        }

        return await Inscripcion.create(data);
    }

    static async cancelarInscripcion(id) {
        const inscripcion = await Inscripcion.findByPk(id);
        if (!inscripcion) throw new Error('No encontramos inscripcion');

        await inscripcion.update({ estado: 'cancelada' });
        return { mensaje: 'Exitosamente cancela inscripcion' };
    }

    static async obtenerInscripciones() {
        try {
            return await Inscripcion.findAll();
        } catch (error) {
            console.error('Error al obtener inscripciones:', error);
            
        }
    }
}

module.exports = InscripcionService;