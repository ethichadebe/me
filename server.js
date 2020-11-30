const express = require("express");
const app = express();

const port = process.env.PORT || 3006;

app.use(express.static(__dirname));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//routes
app.get("/eyamservices", (req, res) => {
  res.render("projects/eyamservices/index");
});

//routes
app.get("/next", (req, res) => {
  res.render("projects/next/index");
});

app.listen(port, () => {
  console.log("server running");
});
