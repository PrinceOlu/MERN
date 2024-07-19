const express = require("express");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const MongoStore = require("connect-mongo");

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
// === custom middlewares
// 1) configure the session
app.use(
  session({
    secret: "khjjjjjs",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 68 * 1000, // expires in 1hr
    },
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/students-db`,
    }),
  })
);
// 2) isAuthentiated------------
const isAuthentiated = (req, res, next) => {
  // check if user exist
  const username = req.session.loginUser
    ? req.session.loginUser.username
    : null;
  if (username) {
    return next();
  } else {
    res.redirect("/login");
  }
};
// 3) isAdmin-----------
const isAdmin = (req, res, next) => {
  // check if user exist
  const admin = req?.session?.loginUser?.role === "admin";
  if (admin) {
    return next();
  } else {
    res.send("forbidden: access denied");
  }
};
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
  console.log(req.session);
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
    // create session when user login
    req.session.loginUser = {
      username: userFound.username,
      role: userFound.role,
    };
    res.redirect("/dashboard");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

// Create the dashboard route
app.get("/dashboard", isAuthentiated, isAdmin, (req, res) => {
  console.log(req.session);
  const username = req.session.loginUser
    ? req.session.loginUser.username
    : null;
  res.render("dashboard", { username });
});

// Create the logout route
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

// Start the server
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
