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
        allowNull: false
    }

}, {
    db,
    modelName: 'Gasolineras',
    tableName: 'gasolineras',
    timestamps: 'true',
});

Gasolineras.belongsTo(Usuarios, { foreignKey: 'email' });


Gasolineras.sync();
module.exports = Gasolineras;