import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

// port
const port: number = 5000;

// app create
const app: Application = express();

// use cors
app.use(cors());

// json parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// database connection
const dbConnect = async (): Promise<void> => {
  console.log("Hello connection");
};
dbConnect();

// get
app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "200",
    message: "Successfully App Running",
    data: { name: "Al Amin", age: 20 },
  });
});

// app listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
