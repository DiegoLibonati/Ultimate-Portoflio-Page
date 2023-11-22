import { Response, Request } from "express";
import { createTable } from "../utils/database/createTable";
import { ProfileModel } from "../models/ProfileModel";
import { insertRow } from "../utils/database/insertRow";
import { selectRow } from "../utils/database/selectRow";

export const ProfileController = {
  getProfile: async (req: Request, res: Response) => {
    const result = await selectRow("profile");

    return res
      .status(200)
      .json({
        message: `¡Se obtuvo de forma exitosa el profile!`,
        data: result,
      });
  },
  setProfile: async (req: Request, res: Response) => {
    const body = req.body;
    const { frontPage, avatar, username, title, description, status } = body;

    if (
      !frontPage ||
      !avatar ||
      !username ||
      !title ||
      !description ||
      !status
    ) {
      return res.status(400).json({
        message: `¡No se actualizo la informacion del Profile!`,
        data: body,
      });
    }

    const result = await selectRow("profile");

    if (result!.length > 0) {
      return res.status(400).json({
        message: `¡No se puede agregar mas informacion al Profile. Ya que existe informacion actualmente!`,
        data: body,
      });
    }

    createTable("profile", ProfileModel);

    insertRow("profile", ProfileModel, Object.values(body));

    return res
      .status(200)
      .json({ message: `¡Se agrego informacion al Profile!`, data: body });
  },
};
