const express = require('express');
const res = require('express/lib/response');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello valmir')
});

app.listen( PORT, HOST);