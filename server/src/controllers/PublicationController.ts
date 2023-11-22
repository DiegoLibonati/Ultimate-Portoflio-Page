import { Response, Request } from "express";
import { insertRow } from "../utils/database/insertRow";
import { PublicationModel } from "../models/PublicationModel";
import { createTable } from "../utils/database/createTable";
import { selectRow } from "../utils/database/selectRow";
import { updateRow } from "../utils/database/updateRow";
import { PublicationType } from "../entities/types";

export const PublicationController = {
  addPublication: (req: Request, res: Response) => {
    const body = req.body;

    if (
      !body.date ||
      !body.status ||
      !body.title ||
      !body.description ||
      !body.link
    ) {
      return res.status(400).json({
        message:
          "¡Una publicacion necesita obligatoriamente: date, status, title, description, link!",
        data: body,
      });
    }

    createTable("publications", PublicationModel);
    insertRow("publications", PublicationModel, Object.values(body));

    return res
      .status(200)
      .json({ message: "¡Publicacion agregada con exito!", data: body });
  },
  getPublications: async (req: Request, res: Response) => {
    createTable("publications", PublicationModel);
    const result = await selectRow("publications");

    return res.status(200).json({
      message: `¡Se obtuvo de forma exitosa las publicaciones!`,
      data: result,
    });
  },
  getPublication: async (req: Request, res: Response) => {
    const id = req.params.id;

    createTable("publications", PublicationModel);

    const result = await selectRow("publications", `id = ${id}`);

    if (result!.length === 0) {
      return res.status(404).json({
        message: `¡No se encontro una publicacion con el id: ${id}!`,
        data: result,
      });
    }

    return res.status(200).json({
      message: `¡Se obtuvo de forma exitosa la publication!`,
      data: result![0],
    });
  },
  addPublicationLikes: async (req: Request, res: Response) => {
    const body = req.body;

    createTable("publications", PublicationModel);

    const result = await selectRow("publications", `id = ${body.id}`);

    if (result!.length === 0) {
      return res.status(404).json({
        message: `¡No se encontro una publicacion con el id: ${body.id}!`,
        data: result,
      });
    }

    const publicationLikes = result![0] as PublicationType;

    const updated = updateRow("publications", `likes = ?`, `id = ?`, [
      body.likes + publicationLikes["likes"],
      body.id,
    ]);

    if (updated) {
      return res.status(200).json({
        message: `¡Se actualizo de forma exitosa la publication!`,
        data: {
          id: body.id,
          likes: body.likes + publicationLikes["likes"],
        },
      });
    }

    return res.status(400).json({
      message: `¡No se pudo actualizar la publicacion!`,
      data: {
        id: body.id,
        likes: body.likes + publicationLikes["likes"],
      },
    });
  },
};
