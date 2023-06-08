const PORT = 8230;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json("hi i'm backend");
});

app.get("/", (req, res) => {
  res.json("i'm backend");
});

app.listen(8230, () =>
  console.log(`backend server is running on port ${PORT}`)
);
