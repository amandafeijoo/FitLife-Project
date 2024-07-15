const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  especialidad: {
    type: String,
    required: true,
  },
  subclases: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }]
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;