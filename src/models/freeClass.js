const mongoose = require('mongoose');

const FreeClassSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
    required: true,
  },
  dias: {
    type: [String],
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  reservacion: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Reserva'
},
isFree: {
  type: Boolean,
  default: false
}
}, {
  timestamps: true,
});

module.exports = mongoose.model('FreeClass', FreeClassSchema);