const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

// MongoDB URI and client configuration
const uri =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";
// create the client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await client.connect();
    console.log("Mongodb connected successfully....");

    // create db
    const db = client.db("employeesdb");

    // create collections
    const employees = db.collection("employees");

    // Create Database documents
    // const emp = [
    //   { name: "Prince", age: "20", department: "A" },
    //   { name: "Moyo", age: "25", department: "B" },
    //   { name: "Ade", age: "30", department: "C" },
    //   { name: "Mofe", age: "35", department: "A" },
    // ];
    // // insert the emp data into the database collections
    // const result = await employees.insertMany(emp);
    // console.log(result);

    // ============QUERYING OPERATORS========
    // ---GREATER THAN $gt---------------
    // const employeesCursor = employees.find({
    //   age: {
    //     $gt: 30,
    //   },
    // });

    // ------GREATER THAN OR EQUAL-TO $gte-----
    const employeesCursor = employees.find({
      age: {
        $gte: 25,
      },
    });
    const result = await employeesCursor.toArray();
    console.log(result);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close(); // Ensure client is closed after operation
  }
};

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
