const Evento = require('../models/eventosModels');

class EventoService {
    static async crearEvento(data) {
        return await Evento.create(data);
    }

    static async obtenerEventos() {
        try {
            return await Evento.findAll();
        } catch (error) {
            console.error('Error al obtener eventos:', error);
            throw error; 
        }
    }

    static async actualizarEvento(id, datos) {
        try {
            const [actualizar] = await Evento.update(datos, { where: { id } });
            if (actualizar === 0) {
                return { mensaje: 'no hemos encontrado eventos' };
            } else {
                return { mensaje: 'Estado Actualizado de eventos' };
            }
        } catch (e) {
            console.error('Error al actualizar el evento:', e);
            throw e; 
        }
    }

    static async eliminarEvento(id) {
        try {
            const borrar = await Evento.destroy({ where: { id } });
            if (borrar === 0) {
                return { mensaje: 'Evento no encontrado para eliminar' };
            } else {
                return { mensaje: 'Eliminado correctamente eventos' };
            }
        } catch (e) {
            console.error('Error al eliminar el evento:', e);
            throw e; 
        }
    }
}

module.exports = EventoService;