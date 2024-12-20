const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
//! Connect to mongodb
mongoose
  .connect("mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/auth-api")
  .then(() => console.log("Db connected successfully..."))
  .catch((e) => console.log(e));

//! Middlewares
app.use(express.json()); 
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
