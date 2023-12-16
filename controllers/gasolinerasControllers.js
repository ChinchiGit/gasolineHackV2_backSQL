const Gasolineras = require('../schemas/gasolineras');
const Precios = require("../schemas/precios")
const { populateGasolineras } = require('../seeds/seed');


const crearGasolinera = async (req, res) => {
    const newGasolinera = req.body;
    const created = await Gasolineras.create(newGasolinera);
    res.status(201).json(created);
};


const borrarUnaGasolinera = async (req, res) => {
    const deleted = await Gasolineras.destroy({ where: { idGasolinera: req.body.idGasolinera } });
    res.status(200).json(deleted);
};

const borrarTodasLasGasolineras = async (req, res) => {
    const deleted = await Gasolineras.destroy({
        where: {},
        truncate: false
    });
    res.status(200).json(deleted);
};

const obtenerUnaGasolineraYTodosSusPrecios = async (req, res) => {
    try {
        const { idGasolinera } = req.body;
        const query = await Gasolineras.findAll({
            include: {
                model: Precios,
                where: { idGasolinera }
            }
        })
        res.status(200).json(query);

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })
    }
};

const poblarTablaGasolineras = async (req, res) => {
    try {
        const gasolineras = await populateGasolineras();
        res.status(201).json(gasolineras);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
};



const gasolineras = {
    crearGasolinera,
    borrarUnaGasolinera,
    borrarTodasLasGasolineras,
    obtenerUnaGasolineraYTodosSusPrecios,
    poblarTablaGasolineras
};

module.exports = gasolineras;