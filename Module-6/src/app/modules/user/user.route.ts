import express from "express";
import { createUserController, getUserByAdminsController, getUserByIDController, getUserController } from "./user.controller";

const router = express.Router();
router.get("/", getUserController);
router.get("/admins", getUserByAdminsController);
router.get("/:id", getUserByIDController);
router.post("/create-user", createUserController);

export default router;
