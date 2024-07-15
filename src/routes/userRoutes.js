const express = require('express');
const userController = require('../controllers/userController');
const { authenticate, authorizeAdmin } = require('../middleware/auth'); // Importa 'authenticate'

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/', userController.createUser);

// Ruta para crear un nuevo usuario administrador
router.post('/admin', authenticate, authorizeAdmin, userController.createAdmin); // Añade 'authenticate' antes de 'authorizeAdmin'

// Ruta para obtener la información del usuario autenticado
router.get('/me', userController.getMe);

// Ruta para obtener la información de un usuario
router.get('/:id', userController.getUser);

// Ruta para obtener todos los usuarios
router.get('/', userController.getUsers);

// Ruta para actualizar la información de un usuario
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', userController.deleteUser);


// Ruta para iniciar sesión
router.post('/login', userController.login);



module.exports = router;