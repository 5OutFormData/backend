import express from "express";
import { blogModel } from "../models/Blog.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const featuredBlog = await blogModel.findOne({ featured: true });
    const nonFeaturedBlog = await blogModel.find({ featured: false });
    res.json({ featuredBlog, nonFeaturedBlog });
  } catch {
    res.status(500).json({ msg: "some error happened" });
  }
});
router.post("/new", async (req, res) => {
  try {
    const newBlog = new blogModel(req.body);
    newBlog.save();
    res.send("saved!");
  } catch {
    res.status(500).json({ msg: "some error happened" });
  }
});
router.post("/delete", async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.body);
    res.send("deleted!");
  } catch {
    res.status(500).json({ msg: "some error happened" });
  }
});
router.post("/save", async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndUpdate(req.body._id, req.body);
    res.send("updated!");
  } catch {
    res.status(500).json({ msg: "some error happened" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);
    res.json(blog);
  } catch {
    res.status(500).json({ msg: "some error happened" });
  }
});

export { router as blogRouter };
