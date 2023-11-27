import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    HospitalName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
   
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    phone: {
      type: Number,
      required: true,
      max:120000000000,
      min:100000000, 
    },
    Address: {
        type: String,
        required: true,
        min: 5,
      },
    },
  { timestamps: true }
);

const Center = mongoose.model("Center", UserSchema);
export default Center;
