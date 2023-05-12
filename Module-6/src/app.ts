import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

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
 
  // step2. Create a Schema corresponding to the document interface.
 

  // step4. database query based on the model
  const createUserToDB = async () => {
    const user = new UserModel({
      id: 524,
      name: {
        firstName: "Al Amin",

        lastName: "Khan",
      },
      email: "alamin@gmail.com",
      phone: "019062222",
      address: {
        present: "Khulna",
        permanent: "Azampur, Moheshpur, Jhenaidah",
      },
      password: "65s1df5",
    });

    await user.save();
    console.log(user);
  };
  createUserToDB().catch((err) => console.log(err));
});

export default app;
