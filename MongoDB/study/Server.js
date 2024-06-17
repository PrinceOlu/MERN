const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const PORT = 5000;

// MongoDB connection string
const uri =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB and start the server
const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Define your database and collection
    const db = client.db("study");
    const dbCollection = db.collection("mybooks");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if failed to connect
  }
};

connectDB();
