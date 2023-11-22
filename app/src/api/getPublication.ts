import { PublicationType } from "../entities/types";
import portfolioApi from "./portfolioApi";

export const getPublication = async (id: string): Promise<PublicationType> => {
  try {
    const result = await portfolioApi.get(`/publications/publication/${id}`);

    return result.data.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
