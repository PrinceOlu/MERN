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

//========= update Operators ============
//========= set and unset  ============
// const updateUser = async () => {
//   try {
//     const updateDoc = await User.findOneAndUpdate(
//       {
//         username: "Alice",
//       },
//       {
//         $set: {
//           age: 100,
//           isActive: false,
//         },
//       },

//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateUser();

// ======= $unset================
const updateUser = async () => {
  try {
    const updateDoc = await User.findOneAndUpdate(
      {
        username: "Alice",
      },
      {
        $unset: {
          age: 1,
          isActive: false,
        },
      },

      {
        new: true,
      }
    );
    console.log(updateDoc);
  } catch (error) {
    console.log(error);
  }
};
updateUser();
// ======== FindByIdAndupdate ============
// const updateUser = async () => {
//   try {
//     const updateDoc = await User.findByIdAndUpdate(
//       "666f95215538c921409b1454",
//       {
//         age: 10,
//         isActive: false,
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateUser();
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
