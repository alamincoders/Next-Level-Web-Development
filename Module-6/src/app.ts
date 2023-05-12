import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();

// middleware app use
app.use(cors());

// data parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// default route
app.get("/", (req: Request, res: Response) => {
  // inserting test data into database
  // step1: create interface
  interface IUser {
    id: number;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    email: string;
    phone: number;
    address: {
      present: string;
      permanent: string;
    };
    password: string;
  }

  // step2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
    id: {
      type: Number,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: { type: String, required: true },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      present: {
        type: String,
        required: true,
      },
      permanent: {
        type: String,
        required: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
  });
});

export default app;
