const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const postRouter = require("./route/postRouter");
//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(express.urlencoded({ extended: true }));
app.use("/", postRouter);
// Connect to mongoose
const url =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected...");
  } catch (error) {
    console.log("Error in connection", error);
  }
};
connectDB();

//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});
//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
