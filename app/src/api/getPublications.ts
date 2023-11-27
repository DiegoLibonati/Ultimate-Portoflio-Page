import { PublicationType } from "../entities/types";

export const getPublications = async (): Promise<PublicationType[]> => {
  try {
    const result = await fetch("/publications.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const publications = await result.json();
    return publications;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
