import { PublicationType } from "../entities/types";

export const getCertificate = async (id: string): Promise<PublicationType> => {
  try {
    const result = await fetch("/certificates.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const certificates = await result.json();
    const certificate = certificates.filter(
      (pub: PublicationType) => pub.id === Number(id)
    )[0];

    return certificate;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
