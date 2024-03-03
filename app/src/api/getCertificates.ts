import { Certificate } from "../entities/entities";

export const getCertificates = async (): Promise<Certificate[]> => {
  try {
    const result = await fetch("/certificates.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const certificates: Certificate[] = await result.json();
    return certificates;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
