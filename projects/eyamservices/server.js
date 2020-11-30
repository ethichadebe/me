const express = require("express");
const app = express();

const port = process.env.PORT || 3005;

app.use(express.static(__dirname));

app.get("/");
