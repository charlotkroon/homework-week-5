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

module.exports = Movie;
