const express = require('express')
const cors = require('cors')
require('./db/conn')

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: 'http://localhost:5173'}));

app.use('/appointments', require('./routes/appointmentRoutes'))

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});