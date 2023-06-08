const PORT = 8230;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi i'm backend");
});

app.get("/api/recipe", async (req, res) => {
  const query = req.query.query;

  const options = {
    method: "GET",
    url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
    params: {
      query: query,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(8230, () =>
  console.log(`backend server is running on port ${PORT}`)
);
