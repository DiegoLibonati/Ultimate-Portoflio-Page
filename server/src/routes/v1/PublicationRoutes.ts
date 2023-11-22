import express from "express";
import { PublicationController } from "../../controllers/PublicationController";

export const PublicationRouter = express.Router();

PublicationRouter.get("/publications", PublicationController.getPublications)
  .get("/publication/:id", PublicationController.getPublication)
  .post("/add", PublicationController.addPublication)
  .put("/add/likes", PublicationController.addPublicationLikes);
