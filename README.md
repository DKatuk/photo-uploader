# Photo-Uploader Project
In this project, I practiced:
1) Expressjs (Static Files, Middleware- Express middleware refers to a set of functions that execute during the processing of HTTP requests received by an Express application)
2) Code formatting with Prettier
3) Nodemon
4) MongoDB and mongoose (CRUD operations)
5) Pagination
6) Heroku deployment

This is not a frontend application. This is a project to learn backend development. I used frontend design template shared publicly <a href="https://templatemo.com/tm-552-video-catalog">here</a>. 

# Expressjs
- Benefits of using Expressjs: In my <a href="https://github.com/DKatuk/nodejs-server">previous work</a>. When Nodejs' HTTP core module is used, lot of if/else statements had to be written to send requests to different paths. The code becomes complicated. Expressjs (A Nodejs framework) gives a cleaner code, handling paths easily.
- To install package: **npm i express --save**

# Setup prettier on repo
- **npm init** to create a package.json file.
- Open Command Search (CTRL + SHIFT + P) on VSCode.
- Find **prettier:Create Configuration File**, click and create .prettierrc.
- **npm install prettier -D --save-exact** (Install as a devDependency and exact version of the package)
- Configure prettier settings in .prettierrc file. (<a href="https://github.com/DKatuk/photo-uploader/blob/main/.prettierrc">Check</a>)
