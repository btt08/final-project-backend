const router = require('express').Router();
const { getAllGpus, getGpu } = require('../services/gpusService');
const { checkResultLength } = require('../modules/AuxFunctions.js');

router.get('/:refCode', async (req, res, next) => {
  try {
    const result = await getGpu(req.params.refCode);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const result = await getAllGpus();
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;