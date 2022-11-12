const router = require('express').Router();
const { getAllManufacturers, getManufacturer } = require('../services/manufacturersService');
const { checkResultLength } = require('../modules/AuxFunctions.js');

router.get('/', async (req, res, next) => {
  try {
    const result = await getAllManufacturers();
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

router.get('/:isin', async (req, res, next) => {
  try {
    const result = await getManufacturer(req.params.isin);
    checkResultLength(result, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;