const { model, Schema } = require('mongoose');

const gpuSchema = new Schema({
  manufacturer: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Manufacturer'
    },
    ISIN: String,
    shortName: String
  },
  refCode: String,
  aib: String,
  model: String,
  ram: String,
  ramType: String,
  power: String,
  price: Number,
});

const Gpu = model('Gpu', gpuSchema);

module.exports = Gpu;