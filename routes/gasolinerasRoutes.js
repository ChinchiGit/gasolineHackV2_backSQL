const express = require('express');
const gasolinerasRouter = express.Router();
const gasolineras = require('../controllers/gasolinerasControllers');


// gasolinerasRouter.get('/all', gasolineras.obtenerGasolineras);
// gasolinerasRouter.get('/one/:id', gasolineras.obtenerEntradaPorId);
gasolinerasRouter.post('/create', gasolineras.crearGasolinera);
// gasolinerasRouter.put('/update-one', gasolineras.actualizarUnaEntrada);
gasolinerasRouter.delete('/delete-one', gasolineras.borrarUnaGasolinera);
gasolinerasRouter.delete('/delete-all', gasolineras.borrarTodasLasGasolineras);
gasolinerasRouter.get('/all-gasstation-prices', gasolineras.obtenerUnaGasolineraYTodosSusPrecios)
gasolinerasRouter.post('/populate-gasolineras', gasolineras.poblarTablaGasolineras);

module.exports = gasolinerasRouter;