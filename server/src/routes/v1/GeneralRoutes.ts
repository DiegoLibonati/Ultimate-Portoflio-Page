import express from "express";
import { GeneralController } from "../../controllers/GeneralController";

export const GeneralRouter = express.Router();

GeneralRouter.get("/alive", GeneralController.getAlive);
