const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
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
// Create user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
// Create model from the schema
const UserRedux = mongoose.model("UserRedux", userSchema);
//! Middlewares
app.use(express.json()); //pass incoming json data from the user
//Cors
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
//!Routes
app.use("/", router);
//!error handler
app.use(errorHandler);
//! Start the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is up and running`));
