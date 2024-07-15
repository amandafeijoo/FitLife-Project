require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware de autenticación
async function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('Acceso denegado. No se proporcionó ningún token.');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (ex) {
    return res.status(400).send('Token inválido.');
  }
}

// Middleware de autorización
function authorizeAdmin(req, res, next) {
  // Asegúrate de que el usuario está definido
  if (!req.user) {
    return res.status(401).send('Usuario no definido.');
  }

  // Ahora puedes acceder a la propiedad isAdmin de forma segura
  if (!req.user.isAdmin) {
    return res.status(403).send('Acceso denegado.');
  }

  next();
}

module.exports = {
  authenticate,
  authorizeAdmin
};