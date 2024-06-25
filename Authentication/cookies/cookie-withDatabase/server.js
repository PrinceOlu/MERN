const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Set the view engine
app.set("view engine", "ejs");

// Connect to mongoose
const url =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected...");
  } catch (error) {
    console.log("Error in connection", error);
  }
};
connectDB();

// Create user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "User",
  },
});
// Create model from the schema
const UserApp = mongoose.model("UserApp", userSchema);

// Create the home route
app.get("/", (req, res) => {
  res.render("home");
});

// Create the register-form route
app.get("/register", (req, res) => {
  res.render("register");
});

// Create the register route logic
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await UserApp.create({
      username: username,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    console.log("Error creating user", error);
    res.status(500).send("Error creating user");
  }
});

// Create the login-form route
app.get("/login", (req, res) => {
  res.render("login");
});

// Create the login route logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userFound = await UserApp.findOne({ username: username });

  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    res.cookie("loginUser", JSON.stringify(userFound), {
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days expiration
      httpOnly: true, // to prevent XSS attacks
      secure: false, // set to true in production stage
      sameSite: "strict",
    });
    res.redirect("/dashboard");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

// Create the dashboard route
app.get("/dashboard", (req, res) => {
  const loginUser = req.cookies.loginUser
    ? JSON.parse(req.cookies.loginUser)
    : null;
  const username = loginUser ? loginUser.username : null;

  if (username) {
    res.render("dashboard", { username });
  } else {
    res.redirect("/login");
  }
});

// Create the logout route
app.get("/logout", (req, res) => {
  res.clearCookie("loginUser");
  res.redirect("/login");
});

// Start the server
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
