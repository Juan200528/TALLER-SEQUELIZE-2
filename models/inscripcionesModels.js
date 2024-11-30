const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');
const evento = require('../models/eventosModels');

    const Inscripcion = Sequelize.define('Inscripcion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuarioId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        eventoId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        fechaInscripcion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW 
        },
        estado: {
            type: DataTypes.ENUM('confirmada', 'cancelada'), 
            defaultValue: 'confirmada'
        }
    }, {
        Sequelize,
        modelName: 'inscripciones',
    });
    

    Inscripcion.belongsTo(evento, { foreignKey: 'eventoId', onDelete: 'CASCADE' });
    
    module.exports = Inscripcion;