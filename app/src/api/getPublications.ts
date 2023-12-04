import { PublicationType } from "../entities/types";

export const getPublications = async (): Promise<PublicationType[]> => {
  try {
    const result = await fetch("/feed.json", {
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
