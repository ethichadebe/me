const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

//Loads static stuff
app.use(express.static(__dirname + "/frontend"));

//routes
app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("Started");
})