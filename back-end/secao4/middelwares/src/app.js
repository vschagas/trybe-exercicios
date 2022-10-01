const express = require('express');
const { getBlogPostFile } = require('./utils/readAndWriteFiles');


const app = express();

app.use(express.json());

app.get('/blog-post', (req, res) => {
  const post = getBlogPostFile();
  
  return res.status(200).json(posts)
});

module.exports = app;
