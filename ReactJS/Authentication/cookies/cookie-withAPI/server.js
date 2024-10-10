const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;

// using postman
app.use(express.json());
app.use(cookieParser());

// simulated user database
const users = [
  {
    username: "Prince",
    password: "123",
    role: "admin",
  },
  {
    username: "PrinMoyoce",
    password: "456",
    role: "user",
  },
];

// lets create the home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome home, API" });
});

// lets create the login route logic
app.post("/login", (req, res) => {
  // 1) find the user login details
  //   console.log(req.body);
  const userFound = users.find((user) => {
    const { username, password } = req.body;
    return user.username === username && user.password === password;
  });
  //   console.log(userFound);
  // 2) create some cookies for the user
  res.cookie("loginUser", JSON.stringify(userFound), {
    maxAge: 3 * 24 * 60 * 1000, //3days expiration
    httpOnly: true, // to prevemt xxs attacks
    secure: false, // set to true in production stage
    sameSite: "strict",
  });
  // 3) Render the user dashboard
  if (userFound) {
    res.json({
      message: "Login successful...",
    });
  } else {
    res.json({
      message: "invalid  user...",
    });
  }
});

// lets create the dashboard route
app.get("/dashboard", (req, res) => {
  // grab the user from the cookie from login
  const loginUser = req.cookies.loginUser
    ? JSON.parse(req.cookies.loginUser)
    : null;
  const username = loginUser ? loginUser.username : null;
  //   console.log(req.cookies);
  if (username) {
    res.json({
      message: `Welcome, ${username}`,
    });
  } else {
    // redirect to login if user does not exist
    res.json({
      message: "unauthourized user",
    });
  }
});
// lets create the logout route
app.get("/logout", (req, res) => {
  res.clearCookie("loginUser");
  //   redirect to login page
  res.json({
    message: "logOut",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log("server started..");
});
