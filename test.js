// const mongoose = require('mongoose');

// const { Schema } = mongoose;

//Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/photo-uploader-test-db');

//Create a schema
// const PhotoSchema = new Schema({
//   title: String,
//   description: String,
// });

//Create a model
// const Photo = mongoose.model('Photo', PhotoSchema);

//-------------------CRUD-------------------//
//CREATE A NEW PHOTO
// Photo.create({
//     title: 'My first photo',
//     description: 'This is my first photo description',
// })

// Photo.create({
//   title: 'My second photo',
//   description: 'This is my second photo description',
// });

//-------------------------------------//
// RETRIEVE ALL PHOTOS
// Photo.find({}, (err, photos) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(photos);
//   }
// });

//-------------------------------------//
// RETRIEVE A PHOTO BY ID (first parameter is a filter that you can apply)
// Photo.find({ _id: '63978c13581b992123d214ce' },(err, photos) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(photos);
//   }
// });

//-------------------------------------//
// UPDATE A PHOTO BY ID
// const photoId = '63978c13581b992123d214ce';
// const newTitle = 'My first photo updated 2';
// const newDescription = 'This is my first photo description updated 2';

//this method has 3 parameters (id, data, callback), you can add additional parameter {new: true} to see updated version in the terminal
// Photo.findByIdAndUpdate(
//   photoId,
//   {
//     title: newTitle,
//     description: newDescription
//   },
//   { new: true },
//   (err, photo) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(photo);
//     }
//   }
// );
//it looks like the data was not updated when logged in the terminal, but if you check the database from MongoDB Compass, it was updated. To see updated version in the terminal, you need to add {new: true} as a third parameter to the method.

//-------------------------------------//
// DELETE A PHOTO BY ID

// Photo.findByIdAndRemove('63978fc2b52392fccb8f2c18', (err, photo) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(photo, 'was deleted');
//   }
// });
