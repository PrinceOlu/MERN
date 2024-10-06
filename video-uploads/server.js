require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const PORT = 5000;
const app = express();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static("public"));


const MONGO_URI = process.env.MONGO_URI; // Your MongoDB connection URI

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

// Define the video schema
const videosSchema = new mongoose.Schema(
  {
    url: String,
    public_id: String,
  },
  {
    timestamps: true,
  }
);

// Create the Video model
const Video = mongoose.model("Video", videosSchema);

// Configure Cloudinary
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    let folder = "video-demo";
    let resource_type = "auto";
    return {
      folder,
      resource_type,
      public_id: file.fieldname + "_" + Date.now(),
    };
  },
});

// Initialize Multer with the configured storage
const upload = multer({ storage });

// Welcome route
app.get("/", (req, res) => {
  res.render("welcome"); // Renders the welcome.ejs view
});

// Route for displaying the upload form
app.get("/upload-form", (req, res) => {
  res.render("upload"); // Renders the upload.ejs view
});

// Upload route for handling file uploads
app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  await Video.create({
    url: req.file.path,
    public_id: req.file.filename,
  });
  // Redirect to the videos page after uploading
  res.redirect("/videos");
});

// Route for displaying all uploaded videos
app.get("/videos", async (req, res) => {
  try {
    const files = await Video.find(); // Fetch all videos from the database
    res.render("videos", { files }); // Renders the videos.ejs view with files
  } catch (error) {
    res.json(error); // Handle error and respond with JSON
  }
});

// Route for the media page (optional)
app.get("/media", async (req, res) => {
  try {
    const files = await Video.find(); // Fetch all videos from the database
    res.render("videos", { files }); // Render the videos.ejs view with the video files
  } catch (error) {
    res.json(error); // Handle error and respond with JSON
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}..`));
