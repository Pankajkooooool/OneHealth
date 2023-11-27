import express from "express";
import { login, userLogin } from "../controllers/auth.js";
import { HospitalLogin } from "../controllers/hospitals.js";

const router = express.Router();

router.post("/hospital-login", HospitalLogin);
router.post("/userlogin", userLogin);

export default router;