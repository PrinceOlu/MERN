const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

// MongoDB URI and client configuration
const uri =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to MongoDB and perform operations
const connectDB = async () => {
  try {
    await client.connect();
    console.log("Mongodb connected successfully....");

    // Create Database name
    const db = client.db("udemy-db");

    // Create the collection
    const udemyStudents = db.collection("udemyStudents");
    // ==== WRITE OPERATIONS=============
    // Create a document using insert many
    // const result = await udemyStudents.insertMany([
    //   {
    //     name: "Prince",
    //     age: 20,
    //     subjects: ["Maths", "Physics", "Chemistry"],
    //   },
    //   {
    //     name: "Moyo",
    //     age: 25,
    //     subjects: ["Maths", "Physics", "Chemistry"],
    //   },
    //   {
    //     name: "Ade",
    //     age: 30,
    //     subjects: ["Maths", "Physics", "Chemistry"],
    //   },
    // ]);
    // console.log("Document inserted with _id:", result);

    // ==== READ OPERATIONS ===============
    // // using find for multiple search
    // const resultCursor = udemyStudents.find();
    // // using findOne for a single search
    const result2 = await udemyStudents.findOne({
      age: 20,
    });

    console.log(result2);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
