import { PublicationType } from "../entities/types";
import portfolioApi from "./portfolioApi";

export const getPublications = async (): Promise<PublicationType[]> => {
  try {
    const result = await portfolioApi.get("/publications/publications");

    return result.data.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
