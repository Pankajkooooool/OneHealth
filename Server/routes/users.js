import express from "express";
import {
  getUser, getUserData
  
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/data/:userId", verifyToken, getUserData);



export default router;