const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

// MongoDB connection URL
const url =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected...");
  } catch (error) {
    console.log("Error in connection", error);
  }
};

connectDB();

// Define schema
const userProfileSchema = new mongoose.Schema({
  username: String,
  age: Number,
  birthday: Date,
  isActive: Boolean,
  hobbies: [String],
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  address: {
    street: String,
    city: String,
    postCode: Number,
  },
  customeData: mongoose.Schema.Types.Mixed,
});

// Compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);

// CRUD Operations
// Save a new user
const newUser = new User({
  username: "Prince",
  age: 26,
  birthday: new Date("2201-04-15"),
  isActive: true,
  hobbies: ["movie", "coding"],
  address: {
    street: 1234,
    city: "Surrey",
    postCode: 222,
  },
  customeData: {
    country: "Canada",
  },
});

newUser
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
