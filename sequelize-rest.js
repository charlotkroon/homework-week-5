const Sequelize = require("sequelize"); //initialize the database connection with Sequelize.
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
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

//Use the model create() method to insert 3 rows of example data.
db.sync().then(() =>
  Promise.all([
    Movie.create({
      title: "Harry Potter and the blablabla Stone",
      yearOfRelease: "2001",
      synopis:
        "11 year old Harry thought he was normal but then a giant comes to his house and tells him that he's a wizard."
    }),
    Movie.create({
      title: "Seinfeld",
      yearOfRelease: "1989",
      synopsis:
        "this is not a movie but a tvshow, but if you watch a lot of episodes it feels like you're watching a movie, right?"
    }),
    Movie.create({
      title: "call me by your name",
      yearOfRelease: "2017",
      synopsis:
        "a movie that makes you wish you had a summer house in italy like the characters in the film."
    })
  ])
);

//create new movie resource
app.post("/Movie", (req, res, next) => {
  console.log("Creating a movieeee", req.body);
  Movie.create(body.req)
    .then(movie => res.status(201).json(movie))
    .catch(error => next(error));
});

// read all movies (the collections resource) & pagination
app.get("/Movie", (req, res, next) => {
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;
  Movie.findAndCountAll({ limit, offset })
    .then(result => res.send({ events: result.rows, total: result.count }))
    .catch(error => next(error));
});

// read a single movie resource
app.get("/Movie/:id", (req, res, next) => {
  Movie.findByPk(req.params.id).then(movie => {
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).end();
    }
  });
});

// update a single movie resource
app.put("/Movie/:id", (req, res, next) => {
  Movie.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(movie => {
      if (movie) {
        movie.update(req.body).then(movie => res.json(movie));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// delete a single movie resource You don't need any special logic. A standard REST implementation is ok.
app.delete("/Movie/:id", (req, res, next) => {
  Movie.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

//checkcheckcheck
app.listen(port, () => console.log("listening on port " + port));

module.exports = Movie;
