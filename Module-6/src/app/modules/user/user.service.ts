import { IUser } from "./user.interface";
import UserModel from "./user.model";

export const createUserToDB = async (data: IUser) => {
  const user = new UserModel(data);
  await user.save();
  if (user) {
    console.log("post user");
  }
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await UserModel.find();
  if (users) {
    console.log("Get Users");
  }
  return users;
};

export const getUserByIdFromDB = async (payload: number | string): Promise<IUser | null> => {
  const user = await UserModel.findOne({ id: payload }, { name: 1, email: 1, password: 1 });
  return user;
};
