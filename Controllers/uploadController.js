import cloudinary from "../Config/cloudinary.js";
import File from '../Models/uploadModels.js'

export const uploadFile = async (req, res) => {
  try {
    // Direct buffer upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer); // ✅ no disk write
    });

    // Save record in MongoDB
    const newFile = new File({
      filename: req.file.originalname,
      url: result.secure_url,
    });
    await newFile.save();

    res.render("index.ejs", { url: result.secure_url });
  } catch (err) {
    res.status(500).send(err.message);
  }
};