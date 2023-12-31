const express = require('express');
const preciosRouter = express.Router();
const precios = require('../controllers/preciosControllers');



preciosRouter.post('/create', precios.crearPrecio);

preciosRouter.delete('/delete-one', precios.borrarUnPrecio);
preciosRouter.delete('/delete-all', precios.borrarTodosLosPrecios);

preciosRouter.post('/populate-precios', precios.poblarTablaPrecios);

module.exports = preciosRouter;