import express, { Application } from "express";
import cors from "cors";
import userRouter from "./app/user/user.route";

const app: Application = express();

// middleware app use

app.use(cors());

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/api/v1/user", userRouter);

export default app;
