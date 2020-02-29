const Sequelize = require("sequelize"); //initialize the database connection with Sequelize.
const db = require("../db"); //initialize the database connection with Sequelize.
const express = require("express");
const bodyparser = require("body-parser");
const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING
  },
  yearOfRelease: {
    type: Sequelize.INTEGER
  },
  synopsis: {
    type: Sequelize.STRING
  }
});

//6. use the model create() method to insert 3 rows of example data.
//This logic should happen after the model synchronization completes.
//The data should persist. Restarting the API should not cause any data to be lost.

//7.
//create a new movie resource
// read all movies (the collections resource)
// read a single movie resource
// update a single movie resource
// delete a single movie resource You don't need any special logic. A standard REST implementation is ok.

//8. Make sure that your handlers send back 404 status codes when appropriate.
module.exports = Movie;
