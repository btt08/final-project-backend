const { model, Schema } = require('mongoose');

const cpuSchema = new Schema({
  manufacturer: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Manufacturer'
    },
    ISIN: String,
    shortName: String
  },
  refCode: String,
  model: String,
  socket: String,
  cores: String,
  baseFrequency: String,
  maxFrequency: String,
  igpu: Boolean,
  price: Number,
});

const Cpu = model('Cpu', cpuSchema);

module.exports = Cpu;