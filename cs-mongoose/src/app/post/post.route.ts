import express from "express";
import { getAllPostController } from "./post.controller";

const router = express.Router();

router.get("/posts", getAllPostController);

export { router };
