const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

// Connect to mongoose
mongoose
  .connect("mongodb://localhost:27017/userAuthDB")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Create user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

// Compile schema into a model
const User = mongoose.model("User", userSchema);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

// Configure session management
app.use(
  session({
    secret: "gsls039434",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/userAuthDB",
    }),
  })
);

// Middleware: isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {
  const userData = req.session.userData;
  if (userData && userData.username) {
    req.userData = userData;
    return next();
  } else {
    res.send("You are not logged in");
  }
};

// Middleware: isAdmin (Authorization)
const isAdmin = (req, res, next) => {
  if (req.userData && req.userData.role === "admin") {
    return next();
  } else {
    res.send("Forbidden: Admins only");
  }
};

// Routes
// Home Route
app.get("/", (req, res) => {
  res.render("home");
});

// Login Route (form)
app.get("/login", (req, res) => {
  res.render("login");
});

// Admin Route (only accessible by admins)
app.get("/admin-only", isAuthenticated, isAdmin, (req, res) => {
  res.render("admin");
});

// Register Route (form)
app.get("/register", (req, res) => {
  res.render("register");
});

// Register Logic
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, password: hashedPassword });
  res.redirect("/login");
});

// Login Logic
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userFound = await User.findOne({ username });

  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    req.session.userData = {
      username: userFound.username,
      role: userFound.role,
    };

    res.cookie(
      "userData",
      JSON.stringify({
        username: userFound.username,
        role: userFound.role,
      }),
      {
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days expiration
        httpOnly: true,
        secure: false, // true if using HTTPS
        sameSite: "strict",
      }
    );

    res.redirect("/dashboard");
  } else {
    res.send("Invalid login credentials");
  }
});

// Dashboard Route
app.get("/dashboard", isAuthenticated, (req, res) => {
  const userData = req.session.userData;
  const username = userData ? userData.username : null;

  if (username) {
    res.render("dashboard", { username });
  } else {
    res.redirect("/login");
  }
});

// Logout Route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.clearCookie("userData");
    res.redirect("/login");
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
