import { Response, Request } from "express";
import { insertRow } from "../utils/database/insertRow";
import { NewsModel } from "../models/NewsModel";
import { selectRow } from "../utils/database/selectRow";
import { createTable } from "../utils/database/createTable";
import { transporter } from "../app";
import { removeRow } from "../utils/database/removeRow";

export const NewsController = {
  addEmail: async (req: Request, res: Response) => {
    const body = req.body;
    const { email } = body;

    createTable("news", NewsModel);

    const isRegexValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const result = await selectRow("news", `email = "${email}"`);

    if (!isRegexValid || result!.length > 0) {
      return res.status(400).json({
        error: `¡El email ingresado no es valido o ya existe. Email ingresado ${email}!`,
      });
    }

    insertRow("news", NewsModel, Object.values(body));

    await transporter.sendMail({
      from: '"Diego Libonati Portfolio" <diego.libonati1998@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Welcome to my newsletter", // Subject line
      text: "Hello, welcome to my news channel. Here you will receive emails based on new publications or projects in my portfolio. Have a nice day.", // plain text body
    });

    return res
      .status(200)
      .json({ message: `¡El email: ${email} fue agregado con exito a News!` });
  },
  removeEmail: async (req: Request, res: Response) => {
    const email = req.url.split("=")[1];

    createTable("news", NewsModel);

    const isRegexValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const result = await selectRow("news", `email = "${email}"`);

    if (!isRegexValid || result!.length === 0) {
      return res.status(400).json({
        message: `¡El email ingresado no es valido o no existe. Email ingresado ${email}!`,
      });
    }

    removeRow("news", `email = "${email}"`);

    return res
      .status(200)
      .json({ message: `¡El email: ${email} fue removido con exito a News!` });
  },
};
