import { ProfileStateType } from "../entities/types";

export const getProfile = async (): Promise<ProfileStateType> => {
  try {
    const result = await fetch("/profile.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const profile = await result.json();
    return profile;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
