const express = require('express');
const cors = require('cors'); 
const connectDB = require('./database/connect');
const router = require('./routes');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
// Habilita CORS para todas las rutas

app.use(cors({
  origin: 'http://localhost:5173'
}));
console.log('CORS habilitado');

// Conectar a la base de datos
connectDB();

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Usar las rutas
app.use(router);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Algo salió mal' });
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});