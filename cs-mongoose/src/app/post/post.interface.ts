import { Document } from "mongoose";

export interface IPost extends Document {
  userId: number;
  id: number;
  title: string;
  body: string;
}
