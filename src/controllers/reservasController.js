const mongoose = require('mongoose');
const Reservation = require('../models/Reserva');
const User = require('../models/User');
const Class = require('../models/Class');
const Instructor = require('../models/Instructor');
const { ObjectId } = require('mongodb');
const { sendReservationEmail, sendSms } = require('./notificationService'); 
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();



exports.createReserva = async (req, res) => {
  try {
    console.log('req.body:', req.body); // Imprime el cuerpo de la solicitud

    const { claseId, subClassId, instructorId, classType, fecha, hora } = req.body;

    // Comprueba si subClassId es undefined
    if (typeof subClassId === 'undefined') {
      return res.status(400).json({ error: 'subClassId no proporcionado en la solicitud' });
    }

    const token = req.headers.authorization.split(' ')[1]; // Assumes the Authorization header is in the format 'Bearer <token>'
    console.log('Token:', token); // Imprime el token

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decodedToken); // Imprime el token decodificado

    const userId = decodedToken._id;

    const user = await User.findById(userId); // Removed .lean()
    console.log('User:', user); // Imprime el usuario

    const clase = await Class.findById(claseId).lean();
    console.log('Clase:', clase); // Imprime la clase
    if (!clase) {
      return res.status(404).json({ error: 'Clase no encontrada' });
    }

      const subClassIdObj = new ObjectId(subClassId);
      const subClasesFiltradas = clase.subclases.filter(subclase => subclase._id.equals(subClassIdObj));
      console.log('Array clase.subclases:', clase.subclases);
      const subClase = subClasesFiltradas.length > 0 ? subClasesFiltradas[0] : null;

      // Si la subclase no existe, imprime un mensaje de error
      if (!subClase) {
        console.log('No se encontró ninguna subclase con el subClassId enviado en la solicitud');
        return res.status(404).json({ error: 'Subclase no encontrada' });
      } else {
        // Si la subclase existe, imprime la subclase
        console.log('Subclase encontrada:', subClase);
      }
    
    // Comprueba si la subclase ya ha alcanzado su capacidad máxima
    const existingReservations = await Reservation.find({ 'subClase.subClassId': subClassId }).countDocuments(); // Changed 'subClassId' to 'subClase.subClassId'
    console.log('Existing reservations:', existingReservations); // Imprime las reservas existentes
    if (existingReservations >= subClase.capacidadMaxima) {
      return res.status(400).json({ error: 'La subclase ya ha alcanzado su capacidad máxima' });
    }

    let instructor;
    if (instructorId) {
      instructor = await Instructor.findById(instructorId);
      console.log('Instructor:', instructor); // Imprime el instructor
    }

    if (!user || !clase) {
      return res.status(404).json({ error: 'Usuario o clase no encontrados' });
    }

   
    const reserva = new Reservation({
      user: userId,
      clase: claseId,
      classType: clase.nombre,
      subClase: {
        ...subClase,
        subClassId: subClassId,
      },
      instructor: instructor ? {
      _id: instructor._id,
      nombre: instructor.nombre,
      especialidad: instructor.especialidad,
      } : undefined,      
      fecha,
      hora
    });
    console.log('Reserva:', reserva); // Imprime la reserva

    const savedReserva = await reserva.save();
    console.log('Saved reserva:', savedReserva); 
    if (!user.reservas) {
      user.reservas = [];
    }

    // Añade la reserva al array de reservas del usuario
    user.reservas.push(savedReserva._id);
    await user.save();

    // Find reservations made by the user and populate the clase field
    const reservas = await Reservation
      .find({ user: userId })
      .populate('clase', '_id'); // only populate the _id field of clase

    console.log(reservas);

    console.log('Reserva creada con éxito:', savedReserva);

    await sendReservationEmail(userId, clase.nombre, fecha, hora);
    await sendSms(userId, clase.nombre, fecha, hora);

    res.status(201).json(savedReserva);
  } catch (error) {
    console.error('Error:', error); // Imprime el error
    res.status(500).json({ error: error.message });
  }
};


exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reservation.find();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const reserva = await Reservation.findById(id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }

    let user = null;
    if (reserva.userId) {
      user = await User.findById(reserva.userId);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
    }

    res.status(200).json({ reserva, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, claseId, instructorId, fecha, hora } = req.body;

    const update = {};
    if (userId) update.usuarioId = usuarioId;
    if (claseId) update.claseId = claseId;
    if (instructorId) update.instructorId = instructorId;
    if (fecha) update.fecha = fecha;
    if (hora) update.hora = hora;

    const reserva = await Reservation.findByIdAndUpdate(id, update, { new: true });
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  
exports.deleteReserva = async (req, res) => {
    try {
      const { id } = req.params;
      const reserva = await Reservation.findByIdAndDelete(id);
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }
      res.status(200).json({ message: 'Reserva eliminada', reserva });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.deleteAllReservas = async (req, res) => {
    try {
      const result = await Reservation.deleteMany({});
      res.status(200).json({ message: 'Todas las reservas han sido eliminadas', result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.cancelarReserva = async (req, res) => {
    console.log('req.params:', req.params);
    console.log('req.body:', req.body);
    try {
      const { id } = req.params;
      const reserva = await Reservation.findById(id);
  
      if (!reserva) {
        return res.status(404).json({ error: 'Reserva no encontrada' });
      }
  
      reserva.cancelada = true;
      await reserva.save();
  
      const user = await User.findById(reserva.user);
      const clase = await Class.findById(reserva.clase); 
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      if (!clase) {
        return res.status(404).json({ error: 'Clase no encontrada' });
      }
  
      // Actualizar las reservas del usuario
      user.reservas = user.reservas.filter(reservaId => reservaId.toString() !== id);
      await user.save();
  
      // Llama a las funciones de notificación 
      const userId = user._id;
      const fecha = reserva.fecha;
      const hora = reserva.hora;
      await sendReservationEmail(userId, clase.nombre, fecha, hora);
      await sendSms(userId, clase.nombre, fecha, hora);
      
      res.status(200).json({ message: 'La reserva ha sido cancelada', reserva });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.getDisponibilidad = async (req, res) => {
    try {
      const { id } = req.params;
  
      const clase = await Class.findById(id);
      if (!clase) {
        return res.status(404).json({ error: 'Clase no encontrada' });
      }
  
      const existingReservations = await Reserva.find({ clase: id }).countDocuments();
  
      res.json({
        capacidadMaxima: clase.capacidadMaxima,
        reservasExistentes: existingReservations,
        disponibilidad: clase.capacidadMaxima - existingReservations
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.clasesDisponibles = async (req, res) => {
    try {
        const clases = await Class.find().lean();

        //  cuenta las reservas existentes y calcula la disponibilidad por clase
        const clasesConDisponibilidad = await Promise.all(clases.map(async (clase) => {
            const reservasExistentes = await Reserva.find({ clase: clase._id }).countDocuments();
            const disponibilidad = clase.capacidadMaxima - reservasExistentes;

            
            return {
                ...clase,
                disponibilidad,
            };
        }));

        res.status(200).json(clasesConDisponibilidad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReservasUsuario = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log('ID del usuario:', userId);
    const reservas = await Reservation.find({ user: userId });
    console.log('Reservas:', reservas); 

    // Si no se encuentran reservas, devuelve un array vacío
    if (!reservas || reservas.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};