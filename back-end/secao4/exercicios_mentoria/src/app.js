const express = require('express')
const data = require('./personagens')

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
  return res.status(200).json(data)
})

module.exports =  app;