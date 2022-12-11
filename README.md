# Photo-Uploader project to learn Expressjs, Middlewares, MongoDB, Heroku Deployment.
In this project, I practiced:
1) Expressjs
2) Middlewares (Express middleware refers to a set of functions that execute during the processing of HTTP requests received by an Express application)
3) Code formatting with Prettier

# Expressjs
- Benefits of using Expressjs: In my previous work (https://github.com/DKatuk/nodejs-server) when Nodejs' HTTP core module is used, lot of if/else statements had to be written to send requests to different paths. The code becomes complicated. Expressjs (A Nodejs framework) gives a cleaner code, handling paths easily.
- To install package: **npm i express --save**

# Setup prettier on repo
- **npm init** to create a package.json file.
- Open Command Search (CTRL + SHIFT + P) on VSCode.
- Find **prettier:Create Configuration File**, click and create .prettierrc.
- **npm install prettier -D --save-exact** (Install as a devDependency and exact version of the package)
- Configure prettier settings in .prettierrc file. (Check: https://github.com/DKatuk/photo-uploader/blob/main/.prettierrc)
