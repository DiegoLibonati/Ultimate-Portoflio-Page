import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import { GeneralRouter } from "./routes/v1/GeneralRoutes";
import { PublicationRouter } from "./routes/v1/PublicationRoutes";
import { NewsRouter } from "./routes/v1/NewsRoutes";
import { ProfileRouter } from "./routes/v1/ProfileRoutes";
import nodemailer from "nodemailer";

const app: Express = express();
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: config.GMAIL_USER,
    pass: config.GMAIL_PASSWORD,
  },
});

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: config.CORS_ORIGIN,
  })
);

// Routes
app.use("/api/v1/general", GeneralRouter);
app.use("/api/v1/publications", PublicationRouter);
app.use("/api/v1/news", NewsRouter);
app.use("/api/v1/profile", ProfileRouter);
app.use((req: Request, res: Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(404).json({ message: "Route not found" });
});

export default app;
