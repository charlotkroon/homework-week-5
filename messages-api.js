const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.use(bodyparser.json());

// 6. The API should only log the message five times.
let amountOfRequests = 0;
const limit = (req, res, next) => {
  if (count > 5) {
    //More than 6 requests?...
    res.status(429).end(); //...send 'too many requests' status code
  } else {
    next();
  }
};

//POST requests to the /messages URI
app.post("/messages", (req, res) => {
  if (!req.body.text) {
    amountOfRequests++; //increment amount of requests
    res.status(400).end();
  } else {
    res.send({ message: "This is the message that was sent" });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
