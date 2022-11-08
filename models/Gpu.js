const { model, Schema } = require('mongoose');

const gpuSchema = new Schema({
  id: String,
  manufacturer: {
    id: {
      type: Schema.Types.String,
      ref: 'Manufacturer'
    },
    shortName: String
  },
  aib: String,
  model: String,
  ram: String,
  ramType: String,
  power: String,
  price: Number,
});

const Gpu = model('Gpu', gpuSchema);

module.exports = Gpu;