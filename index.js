const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
require('./schemas/associations');
require('./config/sqlConnection');
const usuariosRouter = require('./routes/usuariosRoutes');
const gasolinerasRouter = require('./routes/gasolinerasRoutes');
const preciosRouter = require('./routes/preciosRoutes');
const cors = require('cors');
const corsOptions ={
    origin:'https://gasolinehack.netlify.app', 
    credentials:true,           
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

const helmet = require("helmet")
// Set Content Security Policies
const scriptSources = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'defaultSrc': ["'self'"],
      'scriptSrc': scriptSources,
      "img-src": ["'self'", "https:", "data:"]
    }
  })
);

app.use("/usuarios", usuariosRouter);
app.use("/gasolineras", gasolinerasRouter);
app.use("/precios", preciosRouter);
app.get('/', (req, res) => {
  res.send('Bienvenido a la BBDD Gasoline Hack')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
