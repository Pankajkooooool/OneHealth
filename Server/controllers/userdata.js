import PatientRecords from "../models/UserData.js";
import User from "../models/User.js";

/* CREATE */
export const createUserData = async (req, res) => {
  try {
    const { Description,Condition,Directions,userinfo,userId } = req.body;
    // const user = await User.findById(userId);
    
    const newUserRecord = new PatientRecords({
      //Save your 4 hours, if a single user has multiple collections, then give id ref to the user as the last field
      Description,
      Condition,
      Directions,
      userinfo,
      userId
    });
    //Write the code for verifying with the user here
   

    await newUserRecord.save();

    const userData = await PatientRecords.find({userinfo : userinfo});
    res.status(201).json(userData);
  } catch (err) {
    res.status(409).json({ message: err.message });
   
  }
};

export const getUserRecords = async (req, res) => {
  try {
    const { userId } = req.params;
    const Records = await PatientRecords.find({ userinfo: userId });
    res.status(200).json(Records);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const updatedUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const { Description,Condition,Directions } = req.body;
    // const HealthRecord = await PatientRecords.findById(id);

    const UpdatedRecord = await PatientRecords.findByIdAndUpdate(
      id,
      { Description:Description },
      { Condition:Condition },
      { Directions:Directions },
    );

    res.status(200).json(UpdatedRecord);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const deleteHealthRecordById = async (req, res)=> {
  try {
    const healthRecordId = req.params.id; // Assuming the ID parameter is in the URL

    // Use Mongoose to find the health record by ID and remove it
    const deletedHealthRecord = await HealthRecord.findByIdAndRemove(healthRecordId);

    if (!deletedHealthRecord) {
      return res.status(404).json({ message: 'Health record not found' });
    }

    res.status(200).json({ message: 'Health record deleted successfully', deletedRecord: deletedHealthRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
