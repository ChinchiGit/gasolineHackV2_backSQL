const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');

const Precios = db.define("Precios", {
    idRegistro: {
        field: "id_registro",
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    idGasolinera: {
        field: "id_gasolinera",
        type: DataTypes.UUID,
        allowNull: false
    },
    fecha: {
        field: "fecha",
        type: DataTypes.DATE,
        unique: true,
        allowNull: false
    },
    precioGasolina: {
        field: "precio_gasolina",
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    precioDiesel: {
        field: "precio_diesel",
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

}, {
    db,
    modelName: 'Precios',
    tableName: 'precios',
    timestamps: 'true',
});

Precios.sync();

module.exports = Precios;