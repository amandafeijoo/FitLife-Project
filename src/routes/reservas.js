const express = require('express');
const reservasController = require('../controllers/reservasController');
const instructoresController = require('../controllers/instructoresController');
const clasesController = require('../controllers/clasesController');
const freeClassController = require('../controllers/freeClassController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Rutas para instructores
router.post('/instructores', authenticate, instructoresController.createInstructor);
router.get('/instructores', instructoresController.getInstructors);
router.get('/instructores/:id', instructoresController.getInstructor);
router.put('/instructores/:id', authenticate, instructoresController.updateInstructor);
router.delete('/instructores/:id', authenticate, instructoresController.deleteInstructor);
router.get('/instructores/name/:name', instructoresController.getInstructorByName);

// Rutas para clases
router.post('/clases', authenticate, clasesController.createClase);
router.get('/clases', clasesController.getClases);
router.get('/clases/:id', clasesController.getClase);
router.get('/subclases/:id', clasesController.getSubclase);
router.put('/subclases/:id', authenticate, clasesController.updateSubclase);
router.put('/clases/:id', authenticate, clasesController.updateClase);
router.delete('/clases/:id', authenticate, clasesController.deleteClase);
router.delete('/clases', authenticate, clasesController.deleteAllClasses); 
router.delete('/clases/:id/subclases', authenticate, clasesController.deleteAllSubclases);
router.get('/clases/nombre/:name', clasesController.getClaseByName); // Cambiado aquí
router.get('/reservas/subclases/nombre/:name', clasesController.getSubclaseByName);
// Rutas para obtener las clases por tipo
router.get('/clases/tipo/:tipo', clasesController.getClasesPorTipo);

// Rutas para obtener la disponibilidad de una clase
router.get('/clases/:id/disponibilidad', reservasController.getDisponibilidad);
router.get('/clasesDisponibles', reservasController.clasesDisponibles);

// Rutas para clases gratuitas 
router.post('/free-class-user', authenticate, freeClassController.createFreeClass);
router.get('/free-class-user/:id', freeClassController.getFreeClass);
router.put('/free-class-user/:id', authenticate, freeClassController.updateFreeClass);
router.delete('/free-class-user/:id', authenticate, freeClassController.deleteFreeClass);

// Rutas para Reservas 

// Ruta para crear una nueva reserva
router.post('/', reservasController.createReserva);
// Ruta para obtener todas las reservas
router.get('/', reservasController.obtenerReservas);

// Ruta para obtener las reservas del usuario autenticado
router.get('/reservas/:userId', authenticate, reservasController.getReservasUsuario);

// Ruta para obtener una reserva por ID
router.get('/:id', reservasController.getReserva);
router.put('/:id', reservasController.updateReserva);
router.delete('/:id', reservasController.deleteReserva);
router.put('/cancelar/:id', reservasController.cancelarReserva);


module.exports = router;