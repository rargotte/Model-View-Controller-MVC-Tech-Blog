# Model-View-Controller-MVC-Tech-Blog
CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well.


## Description
This is a CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. This application has been deployedit to Heroku. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributions](#Contributions)
  4. [Test](#Test)
  5. [Github](#Github)
  6. [Email](#Email)
  7. [Licenses](#Licenses)

  # Installation
  Once you download the app into your computer you need to run NPM INIT from your terminal.
  Remember this package is being ignored by the .gitignore file and are not replicated in the repository.
  
  This application uses Express.js, Sequilize and MySQL.

  You need to source the database, so please use MySQL commands to achieve this:

  `mysql -u root -p`

  `SOURCE db/schema.sql`

  Once you quit mysql do not forget to seed the database:

    `npm run seed`

  And then start the serve:
  
    `npm start`

  You can also access the application directly in Heroku via the following link:

  https://mysterious-earth-40859.herokuapp.com/


  # Usage
  This application is a CMS-style blog site where people can publish articles, blog posts, thoughts and opinions on different matters.

  # Contributions
  Just me. :)

   # Github
  https://github.com/rargotte

  # Email
  rargotte@hotmail.com

  # Licenses
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
  


