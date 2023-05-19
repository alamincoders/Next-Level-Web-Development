import { IUser } from "./user.interface";
import UserModel from "./user.model";

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await UserModel.find();
  if (users) {
    console.log("Getting user successFully");
  }
  return users;
};
export const createUserToDB = async (data: IUser) => {
  const user = new UserModel(data);
  await user.save();
  if (user) {
    console.log("Create user successFully");
  }
  return user;
};
