const express = require('express');
const app = express();




const eventosRoutes = require ('./router/eventosRouter')
const inscripcionesRoutes = require ('./router/inscripcionesRouter')

let sequelize =require('./config/database');

require ("dotenv").config()
const PORT = process.env.PORT;

app.use(express.json()); 



app.use('/api', eventosRoutes);
app.use('/api', inscripcionesRoutes);


const startServerDB = async () => {
    try{
      await sequelize.sync();
      app.listen(PORT, () => console.log(`Corriendo servidor en: http://localhost:${PORT}`));
    } catch(error) {
      console.log(`Error en la Base de Datos: ${error}`);
    }
  }
  
  startServerDB();
