const router = require('express').Router();
const { getAllCpus, getCpu } = require('../services/cpusService');
const { checkResultLength } = require('../modules/AuxFunctions.js');

router.get('/:refCode', async (req, res, next) => {
  try {
    const result = await getCpu(req.params.refCode);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await getAllCpus(req.query.page);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;