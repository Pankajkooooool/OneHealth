import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    Uid: {
      type: String,
      required: false,
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
      min:1000000000, 
    },
    dob:{
      type: Date,
      required: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
