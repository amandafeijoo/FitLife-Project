const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clase: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  subClase: {
    nombre: String,
    horarios: [{
      tipo: String,
      horario: String,
      dias: [String],
      maxCapacity: Number,
      _id: mongoose.Schema.Types.ObjectId
    }],
    // other fields...
  },
  instructor: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    nombre: String,
    especialidad: String,
  },
  date: Date,
  cancelada: { type: Boolean, default: false },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;