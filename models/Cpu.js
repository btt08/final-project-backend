const { model, Schema } = require('mongoose');

const cpuSchema = new Schema({
  id: String,
  manufacturer: {
    id: {
      type: Schema.Types.String,
      ref: 'Manufacturer'
    },
    shortName: String
  },
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