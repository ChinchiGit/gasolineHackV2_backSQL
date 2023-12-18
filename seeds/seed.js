const { db } = require('../config/sqlConnection');
const Usuarios = require('../schemas/usuarios');
const Gasolineras = require('../schemas/gasolineras');
const Precios = require("../schemas/precios")

const usuariosSeed = [
    {
        idUsuario: "0a82a660-90dd-11ed-8006-9b14b60ebb20",
        name: "Guille",
        email: "guille@gmail.com"
    },
    {
        idUsuario: "0a82a660-90dd-11ed-8006-9b14b60ebb22",
        name: "Alejandro",
        email: "alejandro@gmail.com"
    },
    {
        idUsuario: "0a82a660-90dd-11ed-8006-9b14b60ebb23",
        name: "Carlos",
        email: "carloschinchillamoreno@gmail.com"
    },
    {
        idUsuario: "0a82a660-90dd-11ed-8006-9b14b60ebb24",
        name: "Javi",
        email: "javi@gmail.com"
    }
];

const gasolinerasSeed = [
    {   
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c55",
        email: "guille@gmail.com",
        idEnApi: "4375"
        
    },
    {
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c57",
        email: "guille@gmail.com",
        idEnApi: "4438"
        
    },
    {
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c58",
        email: "alejandro@gmail.com",
        idEnApi: "10765"
    },
    {
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c59",
        email: "carloschinchillamoreno@gmail.com",
        idEnApi: "4503"
    },
    {
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c60",
        email: "carloschinchillamoreno@gmail.com",
        idEnApi: "4527"
    },
    {
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c61",
        email: "javi@gmail.com",
        idEnApi: "4710"
        
    }
];

const preciosSeed = [
    {
        // idRegistro: "p57692",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c55",
        fecha:"Sun Dec 10 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.43,
        precioDiesel: 1.48,
    },
    {
        // idRegistro: "p57691",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c55",
        fecha:"Mon Dec 11 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.50,
        precioDiesel: 1.52,
    },
    {
        // idRegistro: "p57690",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c55",
        fecha:"Tue Dec 12 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.59,
        precioDiesel: 1.61
    },
    {
        // idRegistro: "p57694",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c57",
        fecha:"Sun Dec 10 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.43,
        precioDiesel: 1.48,
    },
    {
        // idRegistro: "p57693",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c57",
        fecha:"Mon Dec 11 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.50,
        precioDiesel: 1.52,
    },
    {
        // idRegistro: "p57697",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c58",
        fecha:"Sun Dec 10 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.39,
        precioDiesel: 1.51,
    },
    {
        // idRegistro: "p57696",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c58",
        fecha:"Mon Dec 11 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.49,
        precioDiesel: 1.40,
    },
    {
        // idRegistro: "p57695",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c58",
        fecha:"Tue Dec 12 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.56,
        precioDiesel: 1.36,
    },
    {
        // idRegistro: "p57700",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c59",
        fecha:"Sun Dec 10 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.63,
        precioDiesel: 1.40,
    },
    {
        // idRegistro: "p57699",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c59",
        fecha:"Mon Dec 11 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.59,
        precioDiesel: 1.36,
    },

    {
        // idRegistro: "p57698",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c59",
        fecha:"Tue Dec 12 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.49,
        precioDiesel: 1.40,
    },
    {
        // idRegistro: "p57702",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c60",
        fecha:"Sun Dec 10 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.58,
        precioDiesel: 1.43,
    },

    {
        // idRegistro: "p57701",
        idGasolinera:"be624280-992e-11ee-b25a-4125bb476c60",
        fecha:"Mon Dec 11 2023 15:50:19 GMT+0100 (hora estándar de Europa central)",
        precioGasolina: 1.61,
        precioDiesel: 1.50,
    },
    
];

//Helper function
const populateDb = async (schema, seed) => {
    await schema.bulkCreate(seed);
};

const populateUsuarios = async () => {
    await populateDb(Usuarios, usuariosSeed);
};

const populateGasolineras = async () => {
    await populateDb(Gasolineras, gasolinerasSeed);
};

const populatePrecios = async () => {
    await populateDb(Precios, preciosSeed);
};


const seeds = {
    populateUsuarios,
    populateGasolineras,
    populatePrecios
};

module.exports = seeds;