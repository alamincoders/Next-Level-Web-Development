import { Request, Response } from "express";
import { createUserToDB, getUserByAdminsDB, getUserByIdFromDB, getUserFromDB } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserToDB(userData);

  res.status(200).json({
    message: "User created successfully",
    data: user,
  });
};

export const getUserController = async (req: Request, res: Response) => {
  const user = await getUserFromDB();
  res.status(200).json({
    message: "All Users Getting Successfully",
    data: user,
  });
};
export const getUserByIDController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    message: "User Getting Successfully",
    data: user,
  });
};
export const getUserByAdminsController = async (req: Request, res: Response) => {
  const user = await getUserByAdminsDB();

  res.status(200).json({
    message: "User Getting Successfully",
    data: user,
  });
};
