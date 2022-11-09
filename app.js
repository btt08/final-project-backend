const express = require('express');
const cors = require('cors');
const cpusRouter = require('./routers/cpusRouter')
const gpusRouter = require('./routers/gpusRouter')
const smartphonesRouter = require('./routers/smartphonesRouter')
const manufacturersRouter = require('./routers/manufacturersRouter')

const config = require('./modules/config');
const hostName = config.HOST;
const port = config.PORT;

require('./modules/mongo');
const app = express();

app.use(cors());

// app.use(express.static('public'));

app.use('/cpus', cpusRouter);
app.use('/gpus', gpusRouter);
app.use('/smartphones', smartphonesRouter);
app.use('/manufacturers', manufacturersRouter);

app.listen(port, hostName, () => {
  console.log(`Servidor lanzado en http://${hostName}:${port}`)
});