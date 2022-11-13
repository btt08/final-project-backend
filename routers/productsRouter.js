const router = require('express').Router();
const { getAllProducts, getProduct, getProductByCat, searchProduct } = require('../services/productsService');
const { checkResultLength } = require('../modules/AuxFunctions.js');

router.get('/cat/:cat', async (req, res, next) => {
  try {
    const { field, order } = req.query;
    const result = await getProductByCat(req.params.cat, req.query.page, [[field, order]]);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

router.get('/search', async (req, res, next) => {
  try {
    const { field, order } = req.query;
    const result = await searchProduct(req.query.q, req.query.page, [[field, order]]);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const { field, order } = req.query;
    const result = await getAllProducts(req.query.page, [[field, order]]);
    checkResultLength(result, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;