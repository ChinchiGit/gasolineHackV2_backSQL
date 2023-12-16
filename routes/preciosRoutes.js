const express = require('express');
const preciosRouter = express.Router();
const precios = require('../controllers/preciosControllers');


// preciosRouter.get('/all', precios.obtenerPrecios);
// preciosRouter.get('/one/:id', precios.obtenerEntradaPorId);
preciosRouter.post('/create', precios.crearPrecio);
// preciosRouter.put('/update-one', precios.actualizarUnaEntrada);
preciosRouter.delete('/delete-one', precios.borrarUnPrecio);
preciosRouter.delete('/delete-all', precios.borrarTodosLosPrecios);
// preciosRouter.get('/all-gasstation-prices', precios.obtenerUnaGasolineraYTodosSusPrecios)
preciosRouter.post('/populate-precios', precios.poblarTablaPrecios);

module.exports = preciosRouter;