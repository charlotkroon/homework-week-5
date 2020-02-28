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

// 6. The API should only log the message five times.
// After receiving five messages, sixth request should be sent a response that indicates the HTTP status
// for "Too Many Requests". Make sure the correct HTTP status code is sent
// (Google it if you haven't seen this status message before).
// Although there are libraries to implement such limits, do not use them! Implement the logic yourself.

//7.Put the message limit logic from the previous step into a middleware function. It should behave the same.
