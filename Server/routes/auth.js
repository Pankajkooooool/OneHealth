import express from "express";
import { login, userLogin } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/userlogin", userLogin);

export default router;