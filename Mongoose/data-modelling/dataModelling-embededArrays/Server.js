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

// students schema
const StudentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    grade: String,
  },
  {
    timestamps: true,
  }
);
// classroom schema
const classroomSchema = new mongoose.Schema(
  {
    className: String,
    students: [StudentSchema],
  },
  {
    timestamps: true,
  }
);
// Compile classroom schema
const classroomApp = mongoose.model("classroomApp", classroomSchema);

// Create a user
const createclassroom = async () => {
  try {
    const newclassroom = await classroomApp.create({
      className: "Math 101",
      students: [
        {
          name: "Prince",
          age: 20,
          grade: "A",
        },
        { name: "Moyo", age: 30, grade: "B" },
        { name: "Ade", age: 40, grade: "C" },
      ],
    });
    console.log(newclassroom);
  } catch (error) {
    if (error.code === 11000) {
      console.log("Duplicate key error:", error.keyValue);
    } else {
      console.log("Error creating user:", error);
    }
  }
};

createclassroom();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
