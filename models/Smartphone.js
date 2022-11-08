const { model, Schema } = require('mongoose');

const smartphoneSchema = new Schema({
  manufacturer: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Manufacturer'
    },
    ISIN: String,
    shortName: String
  },
  model: String,
  cpu: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'Cpu'
    },
    refCode: String,
    model: String
  },
  ram: String,
  storage: String,
  screen: String,
  screenSize: String,
  camera: String,
  price: Number,
});

const Smartphone = model('Smartphone', smartphoneSchema);

module.exports = Smartphone;