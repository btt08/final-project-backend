const Product = require('../models/Product');
const { getOptions } = require('../modules/AuxFunctions')

const getAllProducts = async (page = 1, sort) => {
  let result;
  try {
    result = await Product.paginate({}, getOptions(page, sort));
  } catch (error) {
    console.log(error);
  }
  return result;
}

const searchProduct = async (query, page = 1, sort) => {
  let result;
  const filter = {
    model: new RegExp(query.replace(' ', '.*'), 'i')
  };
  try {
    result = await Product.paginate(filter, getOptions(page, sort));
  } catch (error) {
    console.log(error)
  }
  return result;
}

const getProductByCat = async (cat, page = 1, sort) => {
  let result;
  const filter = {
    cat: new RegExp(cat, 'i')
  }
  try {
    result = await Product.paginate(filter, getOptions(page, sort));
  } catch (error) {
    console.log(error);
  }
  return result;
};

module.exports = {
  getAllProducts,
  getProductByCat,
  searchProduct
};