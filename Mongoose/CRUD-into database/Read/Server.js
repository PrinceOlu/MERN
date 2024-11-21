const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

// MongoDB connection URL
const url =
  "";

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

//========= READ Operations ============
// ======== FIND ============
User.find()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("error");
  });
// ======== FINDONE ============
// User.findOne({
//   username: "Prince",
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("error");
//   });
// ======== FindById ============
// User.findById("666f89c229ac4e1865bc40a2")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("error");
//   });
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
