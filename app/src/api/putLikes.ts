import { PutLikesType } from "../entities/types";
import portfolioApi from "./portfolioApi";

export const putLikes = async ({
  id,
  likes,
}: PutLikesType): Promise<PutLikesType> => {
  try {
    const result = await portfolioApi.put("/publications/add/likes", {
      id: id,
      likes: likes,
    });

    return result.data.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
