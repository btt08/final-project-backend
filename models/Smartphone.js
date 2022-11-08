const { model, Schema } = require('mongoose');

const smartphoneSchema = new Schema({
  id: String,
  manufacturer: {
    id: {
      type: Schema.Types.String,
      ref: 'Manufacturer'
    },
    shortName: String
  },
  model: String,
  cpu: {
    id: {
      type: Schema.Types.String,
      ref: 'Manufacturer'
    },
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