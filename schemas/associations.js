const Usuarios = require('./usuarios');
const Gasolineras = require('./gasolineras');
const Precios = require('./precios');

Usuarios.hasMany(Gasolineras, { foreignKey: 'email' });
Gasolineras.belongsTo(Usuarios, { foreignKey: 'email' });
Gasolineras.hasMany(Precios, { foreignKey: 'idGasolinera' });
Precios.belongsTo(Gasolineras, { foreignKey: 'idGasolinera' });