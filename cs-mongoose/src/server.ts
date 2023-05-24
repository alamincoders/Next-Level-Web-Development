import { app } from "./app";
import "dotenv/config";
import { dbConnect } from "./config/db.config";

// env destructure
const { PORT } = process.env;

// create port
const port = PORT || 8000;

// database connection
dbConnect();

// server running
const run = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err: any) {
    console.log(err.message);
  }
};

run();
