require('./modules/mongo.js');
const Cpu = require('./models/Cpu.js');
const cpus = require('./db/cpus');
const Gpu = require('./models/Gpu.js');
const gpus = require('./db/gpus');
const Smartphone = require('./models/Smartphone.js');
const smartphones = require('./db/smartphones');
const Manufacturer = require('./models/Manufacturer.js');
const manufacturers = require('./db/manufacturers');

const createdb = async (request, response) => {
  await Gpu.deleteMany({});
  await Smartphone.deleteMany({});
  await Cpu.deleteMany({});
  await Manufacturer.deleteMany({});

  const newManufacturers = await Manufacturer.insertMany(manufacturers);
  console.log('MANUFACTURERS ADDED')

  const newCpus = cpus.map(cpu => {
    const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.ISIN === cpu.manufacturer)[0];
    const { ISIN, shortName } = manufacturer;
    return {
      ...cpu,
      manufacturer: { ISIN, shortName }
    }
  });
  await Cpu.insertMany(newCpus);

  console.log('CPUS ADDED')


  const newGpus = gpus.map(gpu => {
    const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.ISIN === gpu.manufacturer)[0];
    const { ISIN, shortName } = manufacturer;
    return {
      ...gpu,
      manufacturer: { ISIN, shortName }
    }
  });
  await Gpu.insertMany(newGpus);

  console.log('GPUS ADDED')

  const newSmartphones = smartphones.map(smartphone => {
    const manufa = newManufacturers.filter((manufacturer) => manufacturer.ISIN === smartphone.manufacturer)[0];
    const cpu = newCpus.filter((cpu) => cpu.refCode === smartphone.cpu)[0];
    return {
      ...smartphone,
      manufacturer: { ISIN: manufa.ISIN, shortName: manufa.shortName },
      cpu: { refCode: cpu.refCode, model: cpu.model }
    }
  });
  await Smartphone.insertMany(newSmartphones);
  console.log('SMARTPHONES ADDED')

  console.log('Sacabo')
};


createdb();