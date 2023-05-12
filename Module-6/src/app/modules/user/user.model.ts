import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserType = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserType, IUserMethods>({
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

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// step3. Create a Model.
const UserModel = model<IUser, UserType>("User", userSchema);

export default UserModel;
