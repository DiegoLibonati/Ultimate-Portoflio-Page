import { Profile } from "../entities/entities";

export const getProfile = async (): Promise<Profile> => {
  try {
    const result = await fetch("/profile.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const profile: Profile = await result.json();
    return profile;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
