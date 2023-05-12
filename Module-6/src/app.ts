import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// middleware app use
app.use(cors());

// default route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to server. Server is running at http://localhost:5000");
});

export default app;
