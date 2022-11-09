const Cpu = require('../models/Cpu');

const getOptions = (page) => {
  return {
    projection: { _id: 0, __v: 0 },
    limit: 3,
    page,
    customLabels: { docs: 'results' }
  };
}

const getAllCpus = async (page = 1) => {
  let result;
  try {
    result = await Cpu.paginate({}, getOptions(page));
  } catch (error) {
    console.log(error);
  }
  return result;
}

const getCpu = async (refCode, page = 1) => {
  let result;
  const filter = {
    refCode: new RegExp(refCode, 'i')
  }
  try {
    result = await Cpu.paginate(filter, getOptions(page));
  } catch (error) {
    console.log(error);
  }
  return result;
};

module.exports = {
  getAllCpus,
  getCpu
};