const express = require('express');
const error = require('../middleware/error');
const root = require('../controllers/root');

const app = express();
app.use(express.json()); // lê json no body

app.use(root);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador
app.use(error);

module.exports = app;
