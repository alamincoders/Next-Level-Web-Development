import app from "./app";
import MongoDbConnect from "./config/db";

const port: number = 5000;
// MongoDb connection

// database connection
MongoDbConnect();

// app listen
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
