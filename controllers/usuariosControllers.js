const Usuarios = require('../schemas/usuarios');
const Gasolineras = require('../schemas/gasolineras');
const { populateUsuarios } = require('../seeds/seed');



const obtenerUsuarioPorEmail = async (req, res) => {
    const query = await Usuarios.findOne({ where: { email: req.params.email } });
    res.status(200).json(query);
};

const crearUsuario = async (req, res) => {
    try{
        const query = await Usuarios.create(req.body);
        res.status(201).json(query);
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })
    }
};


const borrarUsuario = async (req, res) => {
    const deleted = await Usuarios.destroy({ where: { email: req.body.email } });
    res.status(200).json(deleted);
};

const borrarTodosLosUsuarios = async (req, res) => {
    const deleted = await Usuarios.destroy({
        where: {},
        truncate: false
    });
    res.status(200).json(deleted);
};

const obtenerUnUsuarioYTodasSusGasolineras = async (req, res) => {
    try {
        const { email } = req.query;
        const query = await Usuarios.findAll({
            include: {
                model: Gasolineras,
                where: {email},
            }
        })
        res.status(200).json(query);

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })
    }
};


const poblarTablaUsuarios = async (req, res) => {
    try {
        const usuarios = await populateUsuarios();
        res.status(201).json(usuarios);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
};


const usuarios = {
    obtenerUsuarioPorEmail,
    crearUsuario,
    borrarUsuario,
    borrarTodosLosUsuarios,
    obtenerUnUsuarioYTodasSusGasolineras,
    poblarTablaUsuarios,
};

module.exports = usuarios;
