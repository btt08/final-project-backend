const express = require('express');
const cors = require('cors');
const productsRouter = require('./routers/productsRouter')
const manufacturersRouter = require('./routers/manufacturersRouter')

const config = require('./modules/config');
const hostName = config.HOST;
const port = config.PORT;

require('./modules/mongo');
const app = express();

app.use(cors());

// app.use(express.static('public'));

app.use('/products', productsRouter);
app.use('/manufacturers', manufacturersRouter);

app.listen(port, hostName, () => {
  console.log(`Servidor lanzado en http://${hostName}:${port}`)
});