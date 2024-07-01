require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Connect to mongoose
const url =
  "mongodb+srv://ojugbeleolusegun:wNjrUe0sC0ERZpbB@mern-cluster0.7hdkpgd.mongodb.net/image-uplaod";

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

// image schema
const imageSchema = new mongoose.Schema({
  url: String,
  public_id: String,
});
// image model
const image = new mongoose.model("image", imageSchema);
// configure cloudinary
cloudinary.config({
  api_name: process.env.CLOUDINARY_cloud_NAME,
  cloud_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// configure multer storage cloudinary
const cloudstorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images-folder",
    format: async (req, file) => "png",
    public_id: (req, file) => file.fieldname + "_" + Date.now(),
    transformation: [
      {
        width: 800,
        height: 600,
        crop: "fill",
      },
    ],
  },
});
// configure multer to accept file upload
const imgUpload = multer({
  storage: cloudstorage,
  limits: 1024 * 1020 * 5, //max 5MB
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cd(null, true);
    } else {
      cb(new Error("wrong file format", false));
    }
  },
});
// upload route
app.post("/upload", imgUpload.single("image"), async (req, res) => {
  console.log(req.file);
  const uploaded = await Image.create({
    url: req.file.path,
    public_id: req.file.filename,
  });
  res.json({
    message: "Ffile upload...",
    uploaded: uploaded,
  });
});
// fetch all images
app.get("/images", async (req, res) => {
  try {
    const images = await images.find();
    res.json({ images });
  } catch (error) {
    res.json(error);
  }
});
// start the server
app.listen(PORT, () => {
  console.log("server running...");
});
