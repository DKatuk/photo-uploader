const express = require('express');
const app = express();

// MIDDLEWARES
const myLogger = (req, res, next) => {
    console.log('Middleware Log 1');
    next();
};

const myLogger2 = (req, res, next) => {
  console.log('Middleware Log 2');
  next();
};

// Run middlewares
app.use(express.static('public'));
app.use(myLogger);
app.use(myLogger2);

app.get('/', (req, res) => {
    const photo = {
        id: 1,
        name: "Photo Name",
        description: "Photo Description",
    }
    res.send(photo);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
