const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');
const Usuarios = require('./usuarios');

const Gasolineras = db.define("Gasolineras", {
    idGasolinera: {
        field: "id_gasolinera",
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        field: 'email',
        type: DataTypes.STRING(40),
        allowNull: false
    },
    idEnApi: {
        field: "id_enApi",
        type: DataTypes.STRING(150),
        unique: 'compositeIndex', // Cambiado para permitir duplicados entre diferentes usuarios
        allowNull: false
    }

}, {
    db,
    modelName: 'Gasolineras',
    tableName: 'gasolineras',
    timestamps: 'true',
    indexes: [
        {
            unique: true,
            fields: ['email', 'id_enApi'] // Índice compuesto para evitar duplicados por usuario
        }
    ]
});

Gasolineras.belongsTo(Usuarios, { foreignKey: 'email' });


Gasolineras.sync();
module.exports = Gasolineras;