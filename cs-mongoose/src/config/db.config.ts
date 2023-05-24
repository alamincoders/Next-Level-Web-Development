import mongoose from "mongoose";
import { MONGO_URI } from "../utils/mongo.uri";

async function dbConnect() {
  try {
    await mongoose.connect(`${MONGO_URI}`);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("Mongodb Connected!");
  } catch (error: any) {
    console.log(error.message);
  }
}

export { dbConnect };
