const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS
  }
});

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },

  suscripcion: {
    type: String,
    enum: ['Abono Básico', 'Abono Premium', 'Abono Gold'],
    default: 'Abono Básico'
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  terminos: {
    type: Boolean,
    default: false,
  },
  promociones: {
    type: Boolean,
    default: false,
  },
  notificaciones: {
    type: Boolean,
    default: true,
  },
  reservas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation'
  }]
});


userSchema.pre('save', function(next) {
  // Solo enviar correo si el documento es nuevo
  if (this.isNew) {
    let mailOptions = {
      from: 'fitlife.uem@gmail.com',
      to: this.correo,
      subject: 'Bienvenido a FitLife',
      text: 'Gracias por registrarte, ' + this.nombre + ' ' + this.apellido + '! Tu suscripción es: ' + this.suscripcion + '. Puedes visitar nuestra página en http://localhost:5173/Inicio'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;