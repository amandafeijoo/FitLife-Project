const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  nombre: String,
  subclases: [{
    subClassId: { type: String, unique: true }, // Agrega un subClassId a cada subclase
    nombre: String,
    horarios: [{
      tipo: String,
      horario: String,
      dias: [String],
      maxCapacity: Number,
    }]
  }]
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
