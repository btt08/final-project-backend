const { model, Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const manufacturerSchema = new Schema({
  ISIN: String,
  shortName: String,
  fullName: String,
  country: String,
  ceo: String,
  website: String
});

manufacturerSchema.plugin(paginate);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;