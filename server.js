'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
const port = 3000;

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(port)