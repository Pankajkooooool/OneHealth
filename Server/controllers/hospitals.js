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
  
      res.status(200).json({ token, savedUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };