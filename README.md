# RecipeSaver
Full Stack Application using Node.JS, Express, MySQL, HandleBars, Materialize and a homemade ORM utilizing the MVC design pattern.

## Description

This simple full stack application utilizes authentication and user sessions via passport.js, a front end constructed via HTML templating (Handlebars) and the Materialize CSS library, and a back end implemented with Node.js, Express, and MySQL.

The user may add any recipe name and url where they've found the recipe online to the persistent database via an entry form.  The recipe will then be stored on the "Recipes To Try" page, where the user can either save the recipe or delete it.  If saved, the tried status in the database will be updated and the recipe will then be rendered on the saved recipes page.  If deleted, the record will no longer be shown.

## Demo

This application is hosted on heroku [here](https://salty-ridge-97695.herokuapp.com/dashboard).

## Technologies used
- [Node.js](https://nodejs.org/en/)
- [Passport.js NPM Package](http://www.passportjs.org/)
- [bcrypt.js NPM Package](https://www.npmjs.com/package/bcrypt)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Handlebars](http://handlebarsjs.com/)
- [Body-Parser NPM Package](https://www.npmjs.com/package/body-parser)
- [Express NPM Package](https://www.npmjs.com/package/express)
- [Express Session](https://www.npmjs.com/package/express-session)
- [Handlebars NPM Package](https://www.npmjs.com/package/handlebars)
- [Express-Handlebars NPM Package](https://www.npmjs.com/package/express-handlebars)
- [Materialize CSS Library](https://materializecss.com/)

## Prerequisites

- Node.js - Download the latest version of [Node](https://nodejs.org/en/)

## Installation

1. Clone project by running the following command in your terminal/bash: 

        git clone git@github.com:JoeWrightNC/RecipeSaver.git

2. To install the various dependencies for this project run the following command inside the root directory of the cloned filed in your terminal/bash:

        cd RecipeSaver
        npm i

3. Initialize the MySQL database utilizing the following file from the directory:

        schema.sql

4. Finally, run the server locally:

        node server.js


You may access the local application on port 8080 at the URL: `http://localhost:8080/`.