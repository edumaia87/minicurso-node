const express = require('express');
const routes = require('./routes');
const app = express();
const database = require('./db');

app.use(express.json());

app.use(routes);

const porta = 3000;

database.sync().then(
    app.listen(porta, () => {
        console.log('API rodando na porta', porta);
    })
);