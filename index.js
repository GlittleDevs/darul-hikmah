const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at port ${PORT}!`);
});
