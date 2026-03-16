const express = require("express");
const multer = require("multer");
const UploadFile = require("./services/storage.services");
const PostModel = require("./models/post.model");

const app = express();

// middleware
app.use(express.json());

// multer configuration
const upload = multer({
    storage: multer.memoryStorage()
});

// route
app.post("/Create-Post", upload.single("image"), async (req, res) => {
    try {

        console.log("Body:", req.body);
        console.log("File:", req.file);

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            });
        }

        // upload image to ImageKit
        const result = await UploadFile(req.file.buffer);

        console.log("Upload Result:", result);

        // save to database
        const post = await PostModel.create({
            message: "post created successfully",
            caption: req.body.caption
        });

        console.log("Saved Post:", post);

        res.status(201).json({
            message: true,
            data: post
        });

    } catch (error) {

        console.log("Error:", error);

        res.status(500).json({
            message: "Upload failed",
            error: error.message
        });
    }
});
app.get("/post", async (req, res) => {
    const posts = await PostModel.find()

    return res.status(200).json({
        message: "fetch data successfully",
        posts
    })
})



module.exports = app;