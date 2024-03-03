import { ParseDate } from "../entities/entities";
import { addZero } from "./addZero";

export const parseDate = (propDate: string | undefined): ParseDate => {
  const date = new Date(propDate!);

  return {
    date: `${addZero(date.getDate())} ${date.toLocaleString("en-us", {
      month: "short",
    })} ${date.getFullYear()}`,
  };
};
