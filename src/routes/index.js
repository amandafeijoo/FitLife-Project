const express = require('express');
const reservasRoutes = require('./reservas');
const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes'); 
const router = express.Router();

router.use('/users', userRoutes);
router.use('/users', reservasRoutes); //  para las rutas de reservas
router.use('/reservas', reservasRoutes);
router.use('/contact', contactRoutes);

module.exports = router;