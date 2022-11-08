const Cpu = require('../models/Cpu');

const getAllCpus = async () => {
  return await Cpu.find().exec();
}

const getCpu = async (refCode) => {
  const filter = {
    refCode: new RegExp(refCode, 'i')
  }
  const result = await Cpu.find(filter).exec();
  return result;
};

module.exports = {
  getAllCpus,
  getCpu
};