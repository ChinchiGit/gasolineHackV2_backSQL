const express = require('express');
const usuariosRouter = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');


// usuariosRouter.get('/all', usuariosControllers.obtenerusuarios);
usuariosRouter.get('/get-one/:email', usuariosControllers.obtenerUsuarioPorEmail);
usuariosRouter.post('/create', usuariosControllers.crearUsuario);
// usuariosRouter.put('/update-one', usuariosControllers.actualizarAutor);
usuariosRouter.delete('/delete-one',usuariosControllers.borrarUsuario );
usuariosRouter.delete('/delete-all', usuariosControllers.borrarTodosLosUsuarios);
usuariosRouter.get('/all-user-gasstation', usuariosControllers.obtenerUnUsuarioYTodasSusGasolineras);
// usuariosRouter.get('/all-authors-all-entries', usuariosControllers.obtenerTodosLosusuariosConSusEntradas);
usuariosRouter.post('/populate-usuarios',usuariosControllers.poblarTablaUsuarios );


module.exports = usuariosRouter;