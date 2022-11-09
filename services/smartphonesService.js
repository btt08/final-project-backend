const Smartphone = require('../models/Smartphone');

const getAllSmartphones = async () => {
  let result;
  try {
    result = await Smartphone.find({}, { _id: 0, __v: 0 }).exec();
  } catch (error) {
    console.log(error);
  }
  return result;
};

const getSmartphone = async (refCode) => {
  let result;
  const filter = {
    refCode: new RegExp(refCode, 'i')
  }
  try {
    result = await Smartphone.find(filter, { _id: 0, __v: 0 }).exec();
  } catch (error) {
    console.log(error);
  }
  return result;
};

module.exports = {
  getAllSmartphones,
  getSmartphone
};