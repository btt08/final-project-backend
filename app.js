const express = require('express');
const cors = require('cors');
const productsRouter = require('./routers/productsRouter')

const config = require('./modules/config');
const hostName = config.HOST;
const port = config.PORT;

require('./modules/mongo');
const app = express();

app.use(cors());

app.use('/products', productsRouter);

app.listen(port, hostName, () => {
  console.log(`Servidor lanzado en http://${hostName}:${port}`)
});