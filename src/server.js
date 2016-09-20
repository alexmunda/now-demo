const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send('Yay microservices.');
});

app.get('/api/jskc', (req, res) => {
  return res.status(200).send('Hello JSKC');
});

app.listen(1738);
