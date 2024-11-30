
const { DataTypes } = require('sequelize');
const Sequelize = require('../config/database');


    const Evento = Sequelize.define('Evento', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(255), 
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT 
        },
        fecha: {
            type: DataTypes.DATE, 
            allowNull: false
        },
        lugar: {
            type: DataTypes.STRING(255), 
            allowNull: false
        },
        capacidadMaxima: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM('activo', 'inactivo'), 
            defaultValue: 'activo'
        }
    }, {
        Sequelize,
        modelName: 'eventos',
    });
    
    module.exports = Evento;
