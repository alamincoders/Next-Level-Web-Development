import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: { type: String, required: true },
  phone: {
    type: String,
    required: true,
  },
  address: {
    present: {
      type: String,
      required: true,
    },
    permanent: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
});

// step3. Create a Model.
const UserModel = model<IUser>("User", userSchema);

export default UserModel;
