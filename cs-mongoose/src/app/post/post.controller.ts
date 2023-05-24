import { Response, Request } from "express";
import { getAllPost } from "./post.service";

export const getAllPostController = async (req: Request, res: Response) => {
  const post = await getAllPost();

  res.json({ post });
};
