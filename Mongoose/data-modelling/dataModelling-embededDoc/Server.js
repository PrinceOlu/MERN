const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

const url =
  "";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected...");
  } catch (error) {
    console.log("Error in connection", error);
  }
};
connectDB();

// Address schema
const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  {
    timestamps: true,
  }
);

// User schema
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    address: addressSchema,
  },
  {
    timestamps: true,
  }
);

// Compile user schema
const User = mongoose.model("User", userSchema);

// Create a user
const createUser = async () => {
  try {
    const newUser = await User.create({
      name: "moyo",
      email: "moyo@gmail.com",
      address: {
        street: "olomore",
        city: "surrey",
        state: "BC",
        zip: 1234,
      },
    });
    console.log(newUser);
  } catch (error) {
    if (error.code === 11000) {
      console.log("Duplicate key error:", error.keyValue);
    } else {
      console.log("Error creating user:", error);
    }
  }
};

createUser();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
