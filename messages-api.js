const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.use(bodyparser.json());

//POST requests to the /messages URI
app.post("/messages", (req, res) => {
  if (!req.body.text) {
    res.status(400).end();
  } else {
    res.send({ message: "This is the message that was sent" });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
