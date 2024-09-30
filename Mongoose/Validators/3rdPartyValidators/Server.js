const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const validator = require("validator");

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
    age: {
      type: String,
      required: [true, "Please username is required!!!"],
      validate: {
        validator: (val) => {
          return validator.isInt(val, { min: 18, max: 65 });
        },
        message: "Invalid age",
      },
    },
    email: {
      type: String,
      required: [true, "Please email is required!!!"],
      validator: (val) => {
        return validator.isEmail(val);
      },
      message: "Invalid email",
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
      age: "20",
      email: "alicegmail",
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
