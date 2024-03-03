import { Certificate } from "../entities/entities";

export const getCertificate = async (id: string): Promise<Certificate> => {
  try {
    const result = await fetch("/certificates.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const certificates: Certificate[] = await result.json();
    const certificate = certificates.find(
      (cer: Certificate) => cer.id === Number(id)
    );

    return certificate!;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
