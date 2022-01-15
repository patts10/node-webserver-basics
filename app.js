
require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Christian Mendoza',
    title: 'React Developer'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Christian Mendoza',
    title: 'React Developer'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Christian Mendoza',
    title: 'React Developer'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
