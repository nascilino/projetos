require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/matrix.routes');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/matrix', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});