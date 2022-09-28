const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express.json()); // vai permitir que seja possivel receber informações no POST

app.get('/', (request, response) => response.status(200).send('<h1>Boas vindas a minha  API</h1>'));

app.get('/tasks', (request, response) => {
  response.status(200).json(activities);
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;

  activities.push(req.body);

  res.status(201).json({
    message: 'Taks created success!',
    task: description,
  });
});

// route params

app.get('/tasks/:id', (req, res) => {
  console.log(req.params);
  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activity);
});

app.delete('/tasks/:task', (req, res) => {
  const { task } = req.params;
  const arrayPosition = activities.findIndex((team) => team.id === Number(task));
  activities.splice(arrayPosition, 1);

  res.send('DELETADO');
});

app.put('/tasks/:task', (req, res) => {
  const { task } = req.params;
  const { name } = req.body;

  if (name === 'jose') {
    console.log('ola jose');
  }

  res.end();
});

app.get('/users', (req, res) => res.status(200).json([{ name: 'Thiago', age: 10 }]));

module.exports = app;

// Comandos para derrubar processos node / docker

// docker stop $(docker ps -aq) 
// lsof -p 3001 
// ps aux | grep 3001 