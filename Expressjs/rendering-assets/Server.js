const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// serve the static files/folders
// using a middleware
app.use(express.static(path.join(__dirname, "public")));

// render home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views", "home.html"));
});
// render about route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views", "about.html"));
});
// render contact route
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/views", "contact.html"));
});
// render gallery route
app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "/views", "gallery.html"));
});

// start the server
app.listen(PORT, () => {
  console.log("server is running...");
});
