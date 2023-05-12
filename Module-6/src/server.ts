const express = require("express");
const mongoose = require("mongoose");

//
const app = express();
const port = process.env.PORT || 5000;

// MongoDb connection
async function MongoDbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-started");
    console.log("MongoDb Connection Successfully");
  } catch (err) {
    console.log("MongoDb Connection Failed", err);
  }
}

MongoDbConnect();
//

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
