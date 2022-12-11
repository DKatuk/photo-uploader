const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'temp/index.html'));
  res.render('index');
});

app.get('/about', (req, res) => {
  //res.sendFile(path.join(__dirname, 'temp/index.html'));
  res.render('about');
});

app.get('/add', (req, res) => {
  //res.sendFile(path.join(__dirname, 'temp/index.html'));
  res.render('add');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
