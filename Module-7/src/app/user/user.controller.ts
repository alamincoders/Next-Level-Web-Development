import { Request, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.services";

export const getUserController = async (req: Request, res: Response) => {
  const user = await getUserFromDB();
  res.status(200).json({
    data: {
      results: user,
    },
  });
};
export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserToDB(userData);
  res.status(200).json({
    data: {
      results: user,
    },
  });
};
