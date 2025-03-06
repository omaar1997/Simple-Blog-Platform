const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/HIC";
const app = express();
app.use(express.json());
const moment = require("moment");

const Blog = require("./Blog.model");

app.use(cors());
app.get("/api/getBlogs", getBlogs);
app.post("/api/postBlog", postBlog);

async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find().sort({ created_time: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

function postBlog(req, res) {
  let created_time = moment().utc().format("Y-MM-DD HH:mm");

  const blog = new Blog({
    authorName: req.body.authorName,
    blogTitle: req.body.blogTitle,
    blogContent: req.body.blogContent,
    created_time: created_time,
  });

  blog
    .save()
    .then((result) => {
      res.status(201).json({ message: "Blog posted successfully", result });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => console.log("listening on port 5000"));
