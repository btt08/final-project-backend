const Manufacturer = require('../models/Manufacturer.js');

const getAllManufacturers = async () => {
  let result;
  try {
    result = await Manufacturer.find({}, { _id: 0, __v: 0 }).exec();
  } catch (error) {
    console.log(error);
  }
  return result;
};

const getManufacturer = async (ISIN) => {
  let result;
  const filter = {
    ISIN: new RegExp(ISIN, 'i')
  }
  try {
    result = await Manufacturer.find({ filter }, { _id: 0, __v: 0 }).exec();
  } catch (error) {
    console.log(error);
  }
  return result;
}

module.exports = { getAllManufacturers, getManufacturer };