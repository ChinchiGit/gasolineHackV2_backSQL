const express = require('express');
const usuariosRouter = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');



usuariosRouter.get('/get-one/:email', usuariosControllers.obtenerUsuarioPorEmail);
usuariosRouter.post('/create', usuariosControllers.crearUsuario);

usuariosRouter.delete('/delete-one',usuariosControllers.borrarUsuario );
usuariosRouter.delete('/delete-all', usuariosControllers.borrarTodosLosUsuarios);
usuariosRouter.get('/all-user-gasstation', usuariosControllers.obtenerUnUsuarioYTodasSusGasolineras);

usuariosRouter.post('/populate-usuarios',usuariosControllers.poblarTablaUsuarios );


module.exports = usuariosRouter;