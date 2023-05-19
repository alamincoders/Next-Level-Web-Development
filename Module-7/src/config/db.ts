import mongoose from "mongoose";

async function MongoDbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-practice");

    console.log("MongoDb Connection Successfully");
  } catch (err) {
    console.log("MongoDb Connection Failed", err);
  }
}

export default MongoDbConnect;
