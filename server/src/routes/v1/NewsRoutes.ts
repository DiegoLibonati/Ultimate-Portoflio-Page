import express from "express";
import { NewsController } from "../../controllers/NewsController";

export const NewsRouter = express.Router();

NewsRouter.delete("/remove", NewsController.removeEmail).post(
  "/add",
  NewsController.addEmail
);
