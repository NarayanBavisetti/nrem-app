const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000;

app.use(express.json());

dotenv.config({path : "./.env"});
require("./db/connection")
const middleware = (req, res, next) => {
  console.log("Hi middle ware");
  next();
};

app.use(require("./routes/auth"));

// middleware();
app.get("/", (req, res) => {
  res.send("Hi welcome to home");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hi welcome to about page");
});
app.listen(PORT, () => console.log(`server is running at ${PORT}`));
