require('./modules/mongo.js');
const Product = require('./models/Product');
const products = require('./db/products');
const Manufacturer = require('./models/Manufacturer.js');
const manufacturers = require('./db/manufacturers');

const createdb = async (request, response) => {
  await Product.deleteMany({});
  await Manufacturer.deleteMany({});

  const newManufacturers = await Manufacturer.insertMany(manufacturers);
  console.log('MANUFACTURERS ADDED')

  // const newProducts = products.map(product => {
  //   const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.ISIN === product.manufacturer)[0];
  //   const { ISIN, shortName } = manufacturer;
  //   console.log(product)
  //   return {
  //     ...product,
  //     manufacturer: { ISIN, shortName }
  //   }
  // });
  await Product.insertMany(products);

  console.log('PRODUCTS ADDED')

  console.log('Sacabo')
};


createdb();