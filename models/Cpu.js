const { model, Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

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

cpuSchema.plugin(paginate);
const Cpu = model('Cpu', cpuSchema);

module.exports = Cpu;