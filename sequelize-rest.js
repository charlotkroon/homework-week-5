const Sequelize = require("sequelize"); //initialize the database connection with Sequelize.
const express = require("express");
const bodyparser = require("body-parser");

const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

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

db.sync();

sequelize
  .sync() // Create tables if necessary
  .then(() =>
    Promise.all([
      // //Use the model create() method to insert 3 rows of example data.
      Movie.create({
        title: "Harry Potter and the blablabla Stone",
        yearOfRelease: "2001",
        synopis:
          "11 year old Harry thought he was normal but then a giant comes to his house and tells him that he's a wizard. Harry asks: 'I am what?'. The giant says: 'a wizard'. And Harry believes him."
      }),
      Movie.create({
        title: "Seinfeld",
        yearOfRelease: "1989",
        synopsis:
          "this is not a movie but a tvshow, but if you watch a lot of episodes back to back to back it feels like movie, right?"
      }),
      Movie.create({
        title: "call me by your name",
        yearOfRelease: "2017",
        synopsis:
          "a movie that makes you wish you had the exact same summer house in italy like the people in the movie and makes you sign up for duolingo to learn french and italian, so you can speak one part of a sentence in french and the other part of the sentence in italian like elio does"
      })
    ])
  );

//7.
//create a new movie resource
// read all movies (the collections resource)
// read a single movie resource
// update a single movie resource
// delete a single movie resource You don't need any special logic. A standard REST implementation is ok.

//8. Make sure that your handlers send back 404 status codes when appropriate.
module.exports = Movie;
