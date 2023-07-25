import express from "express";
import db from "./utils/firebase.js";
import books from "./models/books.js";

var app = express();
const PORT = process.env.PORT || 5050;

app.get("/books", books);
app.listen(PORT, function () {
  console.log(`Demo project at: ${PORT}!`);
});
