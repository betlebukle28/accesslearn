const server = require('../dataBase/dbConnection');
const express = require('express'); 
const cors = require('cors');
const router = require('../router/router');

//Conexión a MongoDB Atlas
server();

const app = express(); 
const puerto = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use('/api', router);

app.listen(puerto, () => {
console.log('El servidor http://localhost:' + puerto + ' está funcionando');

});