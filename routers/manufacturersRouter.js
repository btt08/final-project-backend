const router = require('express').Router();
const getAllManufacturers = require('../services/manufacturersService');
const { checkResultLength } = require('../modules/AuxFunctions.js');

router.get('/', async (req, res, next) => {
  try {
    const result = await getAllManufacturers();
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;