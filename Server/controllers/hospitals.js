import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Center from "../models/Hospitals.js";

export const HospitalRegister = async (req, res) => {
    try {
      const {
        HospitalName,
        Address,
        email,
        password,
        phone,
     
      } = req.body;
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newCenter = new Center({
        HospitalName,
        Address,
        email,
        password,
        phone,
       
        password: passwordHash,
        
      });
      const savedCenter = await newCenter.save();
     
      const token = jwt.sign({ id: savedCenter._id }, process.env.JWT_SECRET);
  
      res.status(200).json({ token, savedCenter });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  /* LOGGING IN */
export const HospitalLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const center = await Center.findOne({ email: email });
      if (!center) return res.status(400).json({ msg: "Center does not exist." });
  
      const isMatch = await bcrypt.compare(password, center.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
  
      const token = jwt.sign({ id: center._id }, process.env.JWT_SECRET);
      delete center.password;
      res.status(200).json({ token, center });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };