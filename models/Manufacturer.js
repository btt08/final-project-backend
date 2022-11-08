const { model, Schema } = require('mongoose');

const manufacturerSchema = new Schema({
  ISIN: Schema.Types.String,
  shortName: String,
  fullName: String,
  country: String,
  ceo: String,
  website: String
});

const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;