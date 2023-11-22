import { ProfileStateType } from "../entities/types";
import portfolioApi from "./portfolioApi";

export const getProfile = async (): Promise<ProfileStateType> => {
  try {
    const result = await portfolioApi.get("/profile/user");

    return result.data.data[0];
  } catch (e) {
    console.log(e);
    throw e;
  }
};
