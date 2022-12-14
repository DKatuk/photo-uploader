const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const Photo = require('./models/Photo');
//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/photo-uploader-db');

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', { photos });
});

app.get('/about', (req, res) => {
  res.render('about', );
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.get('/photos/:id', async (req, res) => {
  // console.log(req.params.id); //this will show the id of the photo
  const photo = await Photo.findById({_id: req.params.id});
  res.render('photo', { photo })
});

//POST REQUEST
app.post('/photos', async (req, res) => {
  // console.log(req.body);
  await Photo.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
