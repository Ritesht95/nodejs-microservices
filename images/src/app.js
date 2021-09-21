const express = require("express");
const Image = require("./models/images");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "images" });
});

app.get("/api/v1/images", async (req, res) => {
  const images = await Image.find({});
  res.json(images);
});

app.post("/api/v1/images", async (req, res) => {
  console.log("new image2222: -----------------------------");
  const image = new Image({ name: req.body.name });
  const savedImage = await image.save();
  console.log("new image: -----------------------------");
  console.log(savedImage);
  res.json(savedImage);
});

module.exports = app;
