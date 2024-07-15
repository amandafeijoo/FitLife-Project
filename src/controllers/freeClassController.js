const Class = require('../models/Class');
const Reserva = require('../models/Reserva');
const Instructor = require('../models/Instructor');
const FreeClass = require('../models/freeClass');
const { sendReservationEmail, sendTelegramNotification } = require('./notificationService');
const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;



const client = new twilio(accountSid, authToken);


async function sendSms(phoneNumber, userName, className, reservationDate, reservationTime, message) {
    try {
      client.messages.create({
        body: `Hola ${userName}, ${message} Los detalles de tu reserva son: Clase: ${className}, Fecha: ${reservationDate}, Hora: ${reservationTime}.`,
        to: phoneNumber,
        from: '+15513776949'
      })
      .then((message) => console.log(message.sid));
    } catch (err) {
      console.log(err);
    }
}
exports.createFreeClass = async (req, res) => {
    try {
      const { nombre, apellidos, telefono, email, claseId, reservacion, telegramId } = req.body;
  
      const clase = await Class.findById(claseId).lean();
      if (!clase) {
        return res.status(404).json({ error: 'Clase no encontrada' });
      }
  
      const existingReservations = await Reserva.find({ clase: claseId }).countDocuments();
      if (existingReservations >= clase.capacidadMaxima) {
        return res.status(400).json({ error: 'La clase ya ha alcanzado su capacidad máxima' });
      }
  
      let instructor;
      if (reservacion.instructor) {
        instructor = await Instructor.findById(reservacion.instructor);
      } else {
        const instructores = await Instructor.find();
        instructor = instructores[Math.floor(Math.random() * instructores.length)];
      }
  
      if (!clase || !instructor) {
        return res.status(404).json({ error: 'Clase o instructor no encontrado' });
      }
  
      const freeClass = new FreeClass({
        nombre,
        apellidos,
        telefono,
        email,
        clase: claseId
      });
  
      await freeClass.save();
  
      const reserva = new Reserva({
        usuario: freeClass._id,
        clase: claseId,
        instructor: instructor._id,
        fecha: reservacion.fecha,
        hora: reservacion.hora
      });
  
      await reserva.save();
  
      freeClass.reservacion = reserva._id;
      await freeClass.save();
  
      const message = "Gracias por tu reserva y disfruta tu clase de prueba gratuita del team Fitlife Gym";
  
      await sendReservationEmail(email, nombre, clase.nombre, reservacion.fecha, reservacion.hora, message);
      await sendTelegramNotification(telegramId, message);
      await sendSms(telefono, nombre, clase.nombre, reservacion.fecha, reservacion.hora, message);
      res.status(201).json({
        message: 'Usuario de clase gratuita creado con éxito',
        freeClassId: freeClass._id
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


exports.getFreeClass = async (req, res) => {
    try {
      const freeClass = await FreeClass.findById(req.params.id);
      if (!freeClass) {
        return res.status(404).json({ error: 'Clase gratuita no encontrada' });
      }
      res.status(200).json(freeClass);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 
  exports.updateFreeClass = async (req, res) => {
    try {
      const freeClass = await FreeClass.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!freeClass) {
        return res.status(404).json({ error: 'Clase gratuita no encontrada' });
      }
      res.status(200).json(freeClass);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
 
  exports.deleteFreeClass = async (req, res) => {
    try {
      const freeClass = await FreeClass.findByIdAndDelete(req.params.id);
      if (!freeClass) {
        return res.status(404).json({ error: 'Clase gratuita no encontrada' });
      }
      res.status(200).json({ message: 'Clase gratuita eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
