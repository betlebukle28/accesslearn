const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://axelmendietta28:ucoC5G8Itqo1k3Fi@cluster0.yzngujt.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas', err));

// Definir rutas aquí

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
