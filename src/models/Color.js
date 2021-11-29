const { Schema, model } = require('mongoose');

// definir el modelo de la base de datos
const colorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  pantone_value: {
    type: String,
    required: true,
  }
});

module.exports = model('color', colorSchema);
