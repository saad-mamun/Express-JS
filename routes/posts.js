import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();


// role 3 - json
router.get("/", getPosts);

//role 4 - id
router.get("/:id", getPost);

// Create new post
router.post("/", createPost);

// Update post..
router.put('/:id', updatePost)

// Delete post.
router.delete("/:id", deletePost);

export default router;
