import mongoose from "mongoose";
import app from "./app";

//
const port: number = 5000;

// MongoDb connection
async function MongoDbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-started");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
    console.log("MongoDb Connection Successfully");
  } catch (err) {
    console.log("MongoDb Connection Failed", err);
  }
}

MongoDbConnect();
