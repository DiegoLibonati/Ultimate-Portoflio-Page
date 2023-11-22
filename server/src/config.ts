import * as dotenv from "dotenv";

dotenv.config();

export default {
  CORS_ORIGIN: process.env.CORS_ORIGIN! || [
    `http://localhost:${process.env.PORT}`,
  ],
  PORT: process.env.PORT || 5000,
  DATABASE_NAME: process.env.DATABASE_NAME || "INSERTNAME",
  GMAIL_USER: process.env.GMAIL_USER || "",
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || "",
};
