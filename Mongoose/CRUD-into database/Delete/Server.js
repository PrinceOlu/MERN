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

//========= Delete Operations ============
// const deleteUser = async () => {
//   try {
//     const deleteDoc = await User.deleteOne(
//       {
//         username: "Alice",
//       },
//       {
//         age: 1,
//         isActive: false,
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(deleteDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// deleteUser();
// ======== FindByIdAndDelete ============
const deleteUser = async () => {
  try {
    const deleteDoc = await User.findByIdAndDelete(
      "666f95215538c921409b1454",
      {
        age: 10,
        isActive: false,
      },
      {
        new: true,
      }
    );
    console.log(deleteDoc);
  } catch (error) {
    console.log(error);
  }
};
deleteUser();
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
