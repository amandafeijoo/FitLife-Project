const Class = require('../models/Class');
const Reservation = require('../models/Reserva');
const Instructor = require('../models/Instructor');
const FreeClass = require('../models/freeClass');
const { ObjectId } = require('mongodb'); 
const { sendReservationEmail, sendSms } = require('./notificationService'); 
const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;


exports.createFreeClass = async (req, res) => {
  try {
    console.log(req.body); // Imprime todo el cuerpo de la solicitud

    const { nombre, apellidos, telefono,email, countryCode, clase, claseId, subClassId, instructorId, classType,  dias, horario } = req.body;

    console.log(clase, subClassId); // Imprime los IDs de la clase y subclase

    // Busca la clase por su ID
    const claseObj = await Class.findById(clase).lean();
    if (!claseObj) {
      return res.status(404).json({ error: 'Clase no encontrada' });
    }

    console.log(claseObj); // Imprime el objeto de la clase

   // Busca la subclase por su ID
const subClase = await Class.findOne({ 'subclases.subClassId': subClassId });
if (!subClase) {
  console.log('No se encontró ninguna subclase con el subClassId enviado en la solicitud');
  return res.status(404).json({ error: 'Subclase no encontrada' });
} else {
  console.log('Subclase encontrada:', subClase);
}

    // Selecciona un instructor aleatorio
    const instructores = await Instructor.find();
    const instructor = instructores[Math.floor(Math.random() * instructores.length)];

    console.log(instructor); // Imprime el objeto del instructor

    if (!claseObj || !instructor) {
      return res.status(404).json({ error: 'Clase o instructor no encontrado' });
    }

    // Crea una nueva clase gratuita
    const freeClass = new FreeClass({
      nombre,
      apellidos,
      telefono: `${countryCode}${telefono}`,
      email,
      clase: clase,
      subClassId: subClase,
      dias,
      horario,
    });

    console.log(freeClass); // Imprime el objeto de la clase gratuita antes de guardarla

    // Guarda la clase gratuita en la base de datos
    await freeClass.save();

    console.log(freeClass); // Imprime el objeto de la clase gratuita después de guardarla

    // Crea una nueva reserva
   // Crea una nueva reserva
const reserva = new Reservation({
  usuario: freeClass._id, // Usa el ID de la clase gratuita como el ID del usuario
  clase: claseId,
  classType: claseObj.nombre,
  subClase: {
    ...subClase,
    subClassId: subClassId,
  },
  instructor: instructor ? {
    _id: instructor._id,
    nombre: instructor.nombre,
    especialidad: instructor.especialidad,
  } : undefined,      
  dias,
  horario,
  isFree: true // Marca la reserva como gratuita
});

    console.log('Reserva:', reserva);

    // Guarda la reserva en la base de datos
    await reserva.save();

    console.log(reserva); // Imprime el objeto de la reserva después de guardarla

    // Actualiza la clase gratuita con el ID de la reserva
    freeClass.reservacion = reserva._id;
    await freeClass.save();

 /// Envía un correo electrónico y un SMS de confirmación
const message = "Gracias por tu reserva y disfruta tu clase de prueba gratuita del team Fitlife Gym";
// Llama a las funciones sendReservationEmail y sendSms del servicio de notificación con los detalles del usuario no suscrito
await sendReservationEmail(null, email, nombre, claseObj.nombre, dias, horario, message);

// Concatena el código de país y el número de teléfono
const fullPhoneNumber = countryCode + telefono;

// Intenta enviar el SMS y registra cualquier error
try {
  await sendSms(null, fullPhoneNumber, nombre, claseObj.nombre, dias, horario, message);
} catch (error) {
  console.error(`Error sending SMS: ${error}`);
}

// Responde con un mensaje de éxito
res.status(201).json({
  message: 'Usuario de clase gratuita creado con éxito',
  freeClassId: freeClass._id
});
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    console.error(error); // Imprime el error
    res.status(500).json({ error: error.message });
  }
};

exports.getAllFreeClasses = async (req, res) => {
  try {
    const freeClassReservations = await Reservation.find({ isFree: true });
    res.status(200).json(freeClassReservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllFreeClasses = async (req, res) => {
  try {
    const freeClassReservations = await Reservation.find({ isFree: true });
    res.status(200).json(freeClassReservations);
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
