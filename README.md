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
 1) Indicate where is the static files reside by using Express Static Files Middleware: ```app.use(express.static('public'))```
 2) Use path core module of Nodejs: ```const path = require('path');```
 3) Send Index.html file which uses these static files inside **app.get()** method: ```res.sendFile(path.join(__dirname, 'temp/index.html'));```
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
4) **partials folder** has been created to store repeating code ( Header, Navigation, Footer). To import these codes, use this format: e.g., ```<%- include('partials/_header') -%>```

# Setup prettier on repo
- **npm init** to create a package.json file.
- Open Command Search (CTRL + SHIFT + P) on VSCode.
- Find **prettier:Create Configuration File**, click and create .prettierrc.
- **npm install prettier -D --save-exact** (Install as a devDependency and exact version of the package)
- Configure prettier settings in .prettierrc file. (<a href="https://github.com/DKatuk/photo-uploader/blob/main/.prettierrc">Check</a>)
