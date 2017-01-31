# prerequisite
Read HTML, CSS, JS from w3school and https://help.github.com/articles/set-up-git/ and lookup git init, clone, add, commmit, push, https://git-scm.com/docs/gitignore.

# todo
Since the app uses plain HTML, CSS and JS, it does not require Node.js(simply double click on app/index.html). To serve files when deploying, a server is required and hence, 

Install Node.js
If you want to run the preconfigured local web server then you will also need Node.js v4+.

You can download a Node.js installer for your operating system from https://nodejs.org/en/download/.

Check the version of Node.js that you have installed by running the following command:

node --version
In Debian based distributions, there might be a name clash with another utility called node. The suggested solution is to also install the nodejs-legacy apt package, which renames node to nodejs.

apt-get install nodejs-legacy npm
nodejs --version
npm --version
If you need to run different versions of Node.js in your local environment, consider installing Node Version Manager (nvm) or Node Version Manager (nvm) for Windows.
Once you have Node.js installed on your machine, you can download the tool dependencies by running:

npm install
This command reads todo's package.json file and downloads the following tools into the node_modules directory:

Http-Server - simple local static web server https://www.npmjs.com/package/http-server

Note the todo project is setup to install and run these utilities via npm scripts. This means that you do not have to have any of these utilities installed globally on your system to follow the tutorial. See Installing Helper Tools below for more information.
The project is preconfigured with a number of npm helper scripts to make it easy to run the common tasks that you will need while developing:

npm start: Start a local development web server.

# Improvements Required
Object Oriented approach to better formalize js.
Create a CSS template of your own that includes most of your acquired knowledge to act as your framework.
Hard coded data regarding members to be changed into a template that asks for add members.
