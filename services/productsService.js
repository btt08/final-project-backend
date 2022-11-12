const Product = require('../models/Product');
const { getOptions } = require('../modules/AuxFunctions')

const getAllProducts = async (page = 1) => {
  let result;
  try {
    result = await Product.paginate({}, getOptions(page));
  } catch (error) {
    console.log(error);
  }
  return result;
}

const getProduct = async (refCode) => {
  let result;
  const filter = {
    refCode: new RegExp(refCode, 'i')
  }
  try {
    result = await Product
      .findOne(filter)
      .select('-_id -__v')
      .populate('brand', '-_id -__v')
      .exec();
  } catch (error) {
    console.log(error);
  }
  console.log(result)
  return { results: [result] };
};

const searchProduct = async (query, page = 1) => {
  let result;
  const filter = {
    model: new RegExp(query, 'i')
  };
  try {
    result = await Product.paginate(filter, getOptions());
  } catch (error) {
    console.log(error)
  }
  return result;
}

const getProductByCat = async (cat) => {
  let result;
  const filter = {
    cat: new RegExp(cat, 'i')
  }
  try {
    result = await Product.paginate(filter, getOptions());
  } catch (error) {
    console.log(error);
  }
  return result;
};

module.exports = {
  getAllProducts,
  getProduct,
  getProductByCat,
  searchProduct
};