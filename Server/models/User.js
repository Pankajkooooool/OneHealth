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
      required: true,
      unique: true,
      min: 10,
      max: 11,
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
      max:12000000000000,
      min:10000000000, 
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
