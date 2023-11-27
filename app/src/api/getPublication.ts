import { PublicationType } from "../entities/types";

export const getPublication = async (id: string): Promise<PublicationType> => {
  try {
    const result = await fetch("/publications.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const publications = await result.json();
    const publication = publications.filter(
      (pub: PublicationType) => pub.id === Number(id)
    )[0];

    return publication;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
