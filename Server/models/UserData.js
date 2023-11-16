import mongoose from "mongoose";
import User from "./User.js"; 
const PatientRecordsSchema = new mongoose.Schema(
  {
    Condition: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Directions: {
      type: String,
    },
    userinfo: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, 
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model for the PatientRecords table
const PatientRecords = mongoose.model("PatientRecords", PatientRecordsSchema);

export default PatientRecords;
