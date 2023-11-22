import { Response, Request } from "express";

export const GeneralController = {
  getAlive: (req: Request, res: Response) => {
    return res.status(200).json({ message: "¡Estoy vivo!" });
  },
};
