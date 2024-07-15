const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();





exports.createAdmin = async (req, res) => {
  try {
    const { nombre, correo, password, telefono, suscripcion } = req.body;
    const user = new User({ nombre, correo, password, telefono, suscripcion, isAdmin: true });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { 
      nombre, 
      correo, 
      password, 
      telefono, 
      apellidos, 
      fechaNacimiento, 
      genero, 
      suscripcion, 
      isAdmin, 
      countryCode, 
      dni, 
      terminos, 
      promociones, 
      notificaciones 
    } = req.body;

    const suscripcionValida = suscripcion || 'Abono Básico';


    if (!password) {
      return res.status(400).json({ error: 'La contraseña es requerida' });
    }

    const userExists = await User.findOne({ correo });
    if (userExists) {
      return res.status(400).json({ error: 'El correo electrónico ya está en uso' });
    }

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      nombre,
      apellidos: apellidos || '',
      correo,
      password: hashedPassword,
      telefono,
      fechaNacimiento: fechaNacimiento || new Date(),
      genero: genero || '',
      suscripcion: suscripcionValida,
      isAdmin: isAdmin || false,
      countryCode: countryCode || '',
      dni: dni || '',
      terminos: terminos || false,
      promociones: promociones || false,
      notificaciones: notificaciones || false,
      fechaRegistro: new Date(),
    });

    await user.save();

    // Genera un token para el nuevo usuario
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

  
    res.status(201).json({ user, token });
  } catch (error) {
    console.error(error); 
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { correo, password } = req.body 

  const user = await User.findOne({ correo });
  if (!user) {
    return res.status(400).json({ error: 'Correo electrónico o contraseña no válidos' });
  }

  if (!user.password) {
    return res.status(400).json({ error: 'No se encontró una contraseña para este usuario' });
  }

  // Comprueba la contraseña
  bcrypt.compare(password, user.password)
    .then(validPassword => {
      if (!validPassword) {
        return res.status(400).json({ error: 'Correo electrónico o contraseña no válidos' });
      }

      // Verificar si el usuario es un administrador
      if (user.isAdmin) {
        const token = jwt.sign({ _id: user._id, isAdmin: true }, process.env.JWT_SECRET);
        return res.json({ token, user });
      }
      
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.json({ token, user });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error al verificar la contraseña' });
    });
};


exports.getMe = async (req, res) => {
  // token de autenticación del encabezado Authorization
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  console.log('Token:', token); // Esta línea imprimirá el token

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    // Decodifica el token para obtener el userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded:', decoded); // Esta línea imprimirá el token decodificado

    const userId = decoded._id;
    console.log('UserID:', userId); // Esta línea imprimirá el userId

    // Busca el usuario por userId
    const user = await User.findById(userId).select('-password'); // Esto excluye la contraseña del resultado
    console.log('User:', user); // Esta línea imprimirá el usuario

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Devuelve la información del usuario
    res.json(user);
  } catch (error) {
    console.log('JWT_SECRET:', process.env.JWT_SECRET); // Esta línea imprimirá la clave secreta JWT
    res.status(500).json({ error: error.message });
  }
};