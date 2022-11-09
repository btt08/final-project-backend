const router = require('express').Router();
const { getAllSmartphones, getSmartphone } = require('../services/smartphonesService');
const { checkResultLength } = require('../modules/AuxFunctions.js');

router.get('/:refCode', async (req, res, next) => {
  try {
    const result = await getSmartphone(req.params.refCode);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await getAllSmartphones();
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;