const { db } = require('../config/sqlConnection');
const { DataTypes } = require('sequelize');


const Usuarios = db.define("Usuarios", {
    email: {
        field: 'email',
        type: DataTypes.STRING(40),
        unique: true,
        primaryKey: true,
        allowNull: false
    },

    idUsuario: {
        field: 'id_user',
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        unique: true,
        allowNull: false,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING(35),
    },

},
    {
        db,
        modelName: 'Usuarios',
        tableName: 'usuarios',
        timestamps: 'true',
    }
);


Usuarios.sync();

module.exports = Usuarios;


//A.hasOne(B) --> 1to1 FK in B
//A.belongsTo(B) --> 1to1 FK in A
//A.hasMany(B) --> 1toMany FK in B
//A.belongsToMany(B,{though:'crosstable'}) --> ManyToMany FK idA and idB in crosstable

