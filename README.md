# Photo-Uploader Project
In this project, I practiced:
1) Expressjs (Static Files, Middleware- Express middleware refers to a set of functions that execute during the processing of HTTP requests received by an Express application)
2) Code formatting with Prettier
3) Nodemon
4) Template Engines (EJS)
5) MongoDB and mongoose (CRUD operations)
6) Pagination
7) Heroku deployment

This is not a frontend application. This is a project to learn backend development. I used frontend design template shared publicly <a href="https://templatemo.com/tm-552-video-catalog">here</a>. 

# Expressjs and Project Structure
- Benefits of using Expressjs: In my <a href="https://github.com/DKatuk/nodejs-server">previous work</a>. When Nodejs' HTTP core module is used, lot of if/else statements had to be written to send requests to different paths. The code becomes complicated. Expressjs (A Nodejs framework) gives a cleaner code, handling paths easily.
- To install package: **npm i express --save**
- When a web template is used, the static files (images, CSS, fonts, videos etc.) can be rendered on any path( e.g, '/'). 

 1)Indicate where the static files reside by using Express Static Files Middleware: ```app.use(express.static('public'))```

 2)Use path core module of Nodejs: ```const path = require('path');```

 3)Send Index.html file which uses these static files inside **app.get()** method: ```res.sendFile(path.join(__dirname, 'temp/index.html'));```
- We can show static files on routes. However, as the name suggests, these files are static. If we want to show **dynamic content**, we have to use **Template Engines**. 

**EJS npm package (Embedded Java Script)** helps to render dynamic content. 
 ```npm i ejs
    const ejs = require('ejs');
    //Template Engine
    app.set("view engine", "ejs");
```
  EJS package looks for files with **.ejs** extensions, inside **views/** folder. So, all the files with .html extensions have been changed to .ejs extensions.
  This package doesnot send files with sendFile() method. Instead, renders them. So, use **render()** menthod inside **app.get()** method for the routes.
```
 app.get('/', (req, res) => {
  res.render('index');
});
```

4)**partials folder** has been created to store repeating code ( Header, Navigation, Footer). To import these codes, use this format: e.g., ```<%- include('partials/_header') -%>```

5)**MongoDB and Mongoose**: In order to have dynamic content in the website, you need to use a database. So that, you can upload new data, edit and delete them. MongoDB is a NoSQL, document database, with the scalability and flexibility. 
Download <a href="https://www.mongodb.com/products/compass">MongoDB Compass</a> which is a Graphical User Interface for querying, optimizing, and analyzing your MongoDB data.
CRUD operations takes lot of time with MongoDB only. The code gets bigger and complex. Use <a href="https://mongoosejs.com/">Mongoose</a>, which is a Node.js-based Object Data Modeling (ODM) library for MongoDB.
```
npm i mongoose
```
Go and check <a href="https://github.com/DKatuk/photo-uploader/blob/main/test.js">test.js</a> file to see how to do CRUD operations with Mongoose.

```
node test
```

Run **node test** in terminal and refresh Compass Database to see CRUD operations. You can also check VSCode terminal.

6)**Add Photo Page and Post Request**: Create a form with *method* an *action* (Created in add.ejs file). Name attributes of Input elements inside the form are important. When you make a POST Request with expressjs (in app.js file), you will use *action* information, and a request body object is created according to the name attributes that you used in these input elements. (2 Express middlewares were used to end req-res cycle: **urlencoded** and **json()**). If you do not use *name* attributes in input elements, you will log an empty request body object. Make sure that these name attributes match with the Database Schema.

7)**Rendering Dynamic Content**: We received photo data on the client side, and logged Request Body in console with expressjs POST request. Now, we need to send this data to Database. We use **mongoose** to send data. First, create *models* folder and create corresponding file for a database model. (*Photo.js* creates Photo model). Create the database where you will have the CRUD operations. Require or Import the model that you are going to use in that file (*app.js*). After GET request, you need to send data to corresponding .ejs file (e.g., index.ejs) with render() method. Then, modify that document to show data dynamically in the UI.

8)**Rendering Single Photo Pages**: MongoDB gives each data a unique id (_id). You can use it to distinguish each data and create single photo pages. Use this data in URL parameters, and make a request to single photo with that ID and render it in its unique page

```
app.get('/photos/:id', async (req, res) => {
  //console.log(req.params.id); //this will show the id of the photo
  const photo = await Photo.findById({_id: req.params.id});
  res.render('photo', { photo })
});
```

9)**File upload**: Use express-fileupload middleware. When you upload a file, the file will be accessible from req.files.

```
npm i express-fileupload
```
Create a post request according to this middleware. Previously, only the req.body was sent to database. Now, both the req body and image file location is sent. First, create a folder to store uploaded images with **Nodejs FS module** and then, send image path information to the database.
```
//POST REQUEST
app.post('/photos', async (req, res) => {
  // console.log(req.files.image); //this will show the image data

  //we want to create uploads folder if it doesn't exist with nodejs fs module. We will use sync(tr:senkron) methods.
  const uploadDir = 'public/uploads';
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadedPath = __dirname + '/public/uploads/' + uploadedImage.name;

  uploadedImage.mv(uploadedPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
});
```

Later, render these images in the UI by using ejs 
``` 
<img src="<%= photos[i].image %>" ....> 
``` 
# Setup prettier on repo
- **npm init** to create a package.json file.
- Open Command Search (CTRL + SHIFT + P) on VSCode.
- Find **prettier:Create Configuration File**, click and create .prettierrc.
- **npm install prettier -D --save-exact** (Install as a devDependency and exact version of the package)
- Configure prettier settings in .prettierrc file. (<a href="https://github.com/DKatuk/photo-uploader/blob/main/.prettierrc">Check</a>)
