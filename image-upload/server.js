require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
const app = express();
const PORT = 3000;

// Set the view engine to EJS and point to the correct views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const url = process.env.MONGO_URI;
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

// Define the image schema
const imageSchema = new mongoose.Schema({
  url: String,
  public_id: String,
}, { timestamps: true });
const Image = mongoose.model("Image", imageSchema);

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage with multer
const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images-folder",
    format: async (req, file) => "png", // Convert all images to png
    public_id: (req, file) => file.fieldname + "_" + Date.now(), // Unique public ID
    transformation: [{ width: 800, height: 600, crop: "fill" }],
  },
});

// Configure multer for file uploads
const imgUpload = multer({
  storage: cloudStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// Routes

// Home route to render welcome.ejs
app.get("/", (req, res) => {
  res.render("welcome");
});

// Upload route to handle image uploads
app.post("/upload", imgUpload.single("file"), async (req, res) => {
  try {
    const uploadedImage = await Image.create({
      url: req.file.path,
      public_id: req.file.filename,
    });
    res.render("uploadSuccess", { uploadedImage });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file", error });
  }
});

// Fetch all images and render them in a gallery
app.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.render("gallery", { files: images });
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
});

// Serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, "public")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
