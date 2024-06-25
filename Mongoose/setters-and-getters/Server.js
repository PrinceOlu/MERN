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

// Design schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      set: (val) => val.trim(),
    },
    author: {
      type: String,
      required: true,
      set: (val) => val.trim(),
    },
    price: {
      type: Number,
      required: true,
      set: (val) => Math.round(val * 100) / 100,
    },
    tags: {
      type: [String],
      required: true,
      set: (val) => val.map((tag) => tag.toLowerCase()),
    },
    url: {
      type: String,
      required: true,
      set: (val) => `https://google.com/books/${val}`,
    },
  },
  { timestamps: true }
);

// Compile the schema to form the model
const Book = mongoose.model("Book", bookSchema);

// Function to test out schema
const bookDetails = async () => {
  try {
    const bookCreated = await Book.create({
      title: "    mongoose for everyone",
      author: "    Prince Olusegun",
      price: 19.99999,
      tags: ["MONGODB", "NODEJS", "mongoose"],
      url: "mongoose-for-everyone",
    });
    console.log(bookCreated);
  } catch (error) {
    console.log(error);
  }
};
bookDetails();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
