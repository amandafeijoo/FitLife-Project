const nodemailer = require('nodemailer');
const axios = require('axios');
const twilio = require('twilio');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS
  }
});

async function sendReservationEmail(userId, email, userName, className, reservationDate, reservationTime, message = '') {
  if (userId) {
    const user = await User.findById(userId);
    if (user) {
      email = user.correo;
      userName = `${user.nombre} ${user.apellidos}`;
    }
  }

  let mailOptions = {
    from: 'fitlife.uem@gmail.com',
    to: email,
    subject: 'Tu reserva',
    text: `Hola ${userName},\n\nGracias por elegir FitLife Gym. ${message} Los detalles de tu reserva son los siguientes:\n\nClase: ${className}\nFecha: ${reservationDate}\nHora: ${reservationTime}\n\nSaludos,\nEl equipo de FitLife Gym`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });
}

async function sendSms(userId, phoneNumber, userName, className, reservationDate, reservationTime, message = '') {
  try {
    if (userId) {
      const user = await User.findById(userId);
      if (user) {
        phoneNumber = user.countryCode + user.telefono;
        userName = `${user.nombre} ${user.apellidos}`;
      }
    }

    await client.messages.create({
      body: `Hola ${userName},\n\nGracias por elegir FitLife Gym. ${message} Los detalles de tu reserva son los siguientes:\n\nClase: ${className}\nFecha: ${reservationDate}\nHora: ${reservationTime}\n\nSaludos,\nEl equipo de FitLife Gym`,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER
    });
  } catch (err) {
    console.log(err);
    throw new Error('Hubo un error al intentar enviar el SMS.');
  }
}
  

module.exports = {
  sendReservationEmail,
  sendSms
};


