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
const userProfileSchema = new mongoose.Schema({
  username: String,
  age: Number,
  birthday: Date,
  isActive: Boolean,
  hobbies: [String],
  objectId: mongoose.Schema.Types.ObjectId,
  address: {
    street: Number,
    city: String,
    postCode: Number,
  },
  customeData: mongoose.Schema.Types.Mixed,
});

// compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);
// start server
app.listen(PORT, () => {
  console.log("sever running...");
});
