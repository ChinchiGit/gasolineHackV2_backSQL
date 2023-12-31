const express = require('express');
const gasolinerasRouter = express.Router();
const gasolineras = require('../controllers/gasolinerasControllers');



gasolinerasRouter.post('/create', gasolineras.crearGasolinera);

gasolinerasRouter.delete('/delete-one', gasolineras.borrarUnaGasolinera);
gasolinerasRouter.delete('/delete-all', gasolineras.borrarTodasLasGasolineras);
gasolinerasRouter.get('/all-gasstation-prices', gasolineras.obtenerUnaGasolineraYTodosSusPrecios)
gasolinerasRouter.post('/populate-gasolineras', gasolineras.poblarTablaGasolineras);

module.exports = gasolinerasRouter;