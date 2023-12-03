import { PublicationType } from "../entities/types";

export const getCertificates = async (): Promise<PublicationType[]> => {
  try {
    const result = await fetch("/certificates.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const certificates = await result.json();
    return certificates;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
