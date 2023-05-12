import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  admin?: boolean;
  email: string;
  phone: string;
  address: {
    present: string;
    permanent: string;
  };
  password: string;
}

export interface IUserMethods {
  fullName(): string;
}

export interface UserType extends Model<IUser, {}, IUserMethods> {
  getUserByAdmins(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
