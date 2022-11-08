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
  const newCpus = cpus.map(cpu => {
    const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.id === cpu.manufacturer)[0];
    const { id, shortName } = manufacturer;
    return {
      ...cpu,
      manufacturer: { id, shortName }
    }
  });
  await Cpu.insertMany(newCpus);

  const newGpus = gpus.map(gpu => {
    const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.id === gpu.manufacturer)[0];
    const { id, shortName } = manufacturer;
    return {
      ...gpu,
      manufacturer: { id, shortName }
    }
  });
  await Gpu.insertMany(newGpus);

  const newSmartphones = smartphones.map(smartphone => {
    const manufa = newManufacturers.filter((manufacturer) => manufacturer.id === smartphone.manufacturer)[0];
    const cpu = newCpus.filter((cpu) => cpu.id === smartphone.cpu)[0];
    return {
      ...smartphone,
      manufacturer: { id: manufa.id, shortName: manufa.shortName },
      cpu: { id: cpu.id, model: cpu.model }
    }
  });
  await Smartphone.insertMany(newSmartphones);

  console.log('Sacabo')
};


createdb();