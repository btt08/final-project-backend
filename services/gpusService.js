const Gpu = require('../models/Gpu');

const getAllGpus = async () => {
  let result;
  try {
    result = await Gpu.find({}, { _id: 0, __v: 0 }).exec();
  } catch (error) {
    console.log(error);
  }
  return result;
};

const getGpu = async (refCode) => {
  let result;
  const filter = {
    refCode: new RegExp(refCode, 'i')
  };
  try {
    result = await Gpu.find(filter, { _id: 0, __v: 0 }).exec();
  } catch (error) {
    console.log(error)
  }
  return result;
}

module.exports = {
  getAllGpus,
  getGpu
};