const Precios = require('../schemas/precios');
const { populatePrecios } = require('../seeds/seed');


const crearPrecio = async (req, res) => {
    const newPrecio = req.body;
    const created = await Precios.create(newPrecio);
    res.status(201).json(created);
};


const borrarUnPrecio = async (req, res) => {
    const deleted = await Precios.destroy({ where: { idRegistro: req.body.idRegistro } });
    res.status(200).json(deleted);
};

const borrarTodosLosPrecios = async (req, res) => {
    const deleted = await Precios.destroy({
        where: {},
        truncate: false
    });
    res.status(200).json(deleted);
};


const poblarTablaPrecios = async (req, res) => {
    try {
        const precios = await populatePrecios();
        res.status(201).json(precios);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
};



const precios = {
    crearPrecio,
    borrarUnPrecio,
    borrarTodosLosPrecios,
    poblarTablaPrecios
};

module.exports = precios;