const { model, Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');
const Manufacturer = require('../models/Manufacturer.js');

const productSchema = new Schema({
  manufacturer_id: String,
  refCode: String,
  model: String,
  cat: String,
  price: Number
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

productSchema.virtual('brand', {
  ref: 'Manufacturer',
  localField: 'manufacturer_id',
  foreignField: 'ISIN',
  justOne: true
});

productSchema.plugin(paginate);
const Products = model('Product', productSchema);

module.exports = Products;