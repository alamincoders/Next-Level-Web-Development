import mongoose, { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
  },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
