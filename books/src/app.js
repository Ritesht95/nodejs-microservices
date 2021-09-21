const express = require("express");
const Book = require("./models/books");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "books" });
});

app.get("/api/v1/books", async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

app.post("/api/v1/books", async (req, res) => {
  console.log("new book2222: -----------------------------");
  const book = new Book({ name: req.body.name });
  const savedBook = await book.save();
  console.log("new book: -----------------------------");
  console.log(savedBook);
  res.json(savedBook);
});

module.exports = app;
