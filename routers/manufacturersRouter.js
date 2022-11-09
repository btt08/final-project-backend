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

router.get('/:ISIN', async (res, req, next) => {
  try {
    const result = await getManufacturer(req.params.ISIN);
    checkResultLength(result, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;