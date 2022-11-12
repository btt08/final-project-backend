const { model, Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const productSchema = new Schema({
  manufacturer_id: String,
  refCode: String,
  model: String,
  cat: String,
  price: Number
}, {
  toObject: { virtuals: true },
  // use if your results might be retrieved as JSON
  // see http://stackoverflow.com/q/13133911/488666
  toJSON: { virtuals: true }
});

productSchema.virtual('brand', {
  ref: 'Manufacturer',
  localField: 'manufacturer_id',
  foreignField: 'ISIN',
  justOne: true // for many-to-1 relationships
});

productSchema.plugin(paginate);
const Products = model('Product', productSchema);

module.exports = Products;