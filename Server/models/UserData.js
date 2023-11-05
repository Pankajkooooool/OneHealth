import mongoose from "mongoose";



const PatientRecordsSchema = new mongoose.Schema({
  
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
});

// Create a model for the PatientRecords table
const PatientRecords = mongoose.model('PatientRecords', PatientRecordsSchema);



export default PatientRecords;
