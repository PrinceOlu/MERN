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

//========= READ Operations ============
// ======== FindById ============
// User.findById("666f89c229ac4e1865bc40a2")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("error");
//   });

//======READ QUERY Operations ============
// ---where-------
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(10);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
// // ---sort-------
// const findUsers = async () => {
//   try {
//     const users = await User.find().sort({ username: 1 });
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
// ---limit-------
const findUsers = async () => {
  try {
    const users = await User.find().sort({ username: 1 }).limit(2);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
findUsers();
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
