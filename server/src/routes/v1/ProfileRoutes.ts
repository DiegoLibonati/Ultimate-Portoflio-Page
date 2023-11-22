import express from "express";
import { ProfileController } from "../../controllers/ProfileController";

export const ProfileRouter = express.Router();

ProfileRouter.get("/user", ProfileController.getProfile).post(
  "/set",
  ProfileController.setProfile
);
