const mongoose = require('mongoose');

const server = async () => {
  try{
    await mongoose.connect('mongodb+srv://axelmendietta28:ucoC5G8Itqo1k3Fi@cluster0.yzngujt.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conexión a MongoDB Atlas exitosa');
  }catch(error){
    throw new Error('Error al conectar a MongoDB Atlas');
    console.log(error);
  }
};

module.exports = server;