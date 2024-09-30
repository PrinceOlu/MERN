const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

const url =
  "";

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
      unique: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      required: [true, "Please email is required!!!"],
      unique: true,
      match: /@/,
    },
    age: {
      type: Number,
      required: [true, "Please age is required!!!"],
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      enum: ["Male", "female", "others"],
      default: "Others",
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
      age: 10,
      gender: "female",
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
