import express from "express";
// import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import {createUserData, getUserRecords} from "../controllers/userdata.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.post("/create", verifyToken, createUserData);
router.get("/:userId/get", verifyToken, getUserRecords);

/* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);

export default router;
