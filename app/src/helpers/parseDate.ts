import { parseDateType } from "../entities/types";
import { addZero } from "./addZero";

export const parseDate = (propDate: string | undefined): parseDateType => {
  const date = new Date(propDate!);

  return {
    date: `${addZero(date.getDate())} ${date.toLocaleString("en-us", {
      month: "short",
    })} ${date.getFullYear()}`,
  };
};
