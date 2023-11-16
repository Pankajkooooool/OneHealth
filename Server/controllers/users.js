import User from "../models/User.js";
import PatientRecords from "../models/UserData.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({Uid : id});
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.params; 
    const Records = await PatientRecords.find({ userId: userId });
    res.status(200).json(Records);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



