const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

const url =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connected...");
  } catch (error) {
    console.log("error in connection", error);
  }
};
connectDB();
// design schema
const userProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please username is required!!!"],
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9]+$/.test(value);
        },
        message: "Username can only contain alphaNumeric letters",
      },
    },
    email: {
      type: String,
      required: [true, "Please email is required!!!"],
      unique: true,
      validate: {
        validator: function (value) {
          return value.endsWith("@gmail.com");
        },
        message: "Email error",
      },
    },
  },
  {
    timestamps: true,
  }
);

// compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);
// lets create a function to test out schema
const createProfile = async () => {
  try {
    // const userCreated = await User.create({});
    const userCreated = await User.create({
      username: "Alice",
      email: "alice@gmail.com",
    });
    console.log(userCreated);
  } catch (error) {
    console.log(error);
  }
};
createProfile();
// start server
app.listen(PORT, () => {
  console.log("sever running...");
});
