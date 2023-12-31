import { ProfileStateType, useProfileStoreType } from "../entities/types";
import { setProfile } from "../store/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useProfileStore = (): useProfileStoreType => {
  const { id, frontPage, avatar, username, title, description, status } =
    useAppSelector((state) => state.profile);
  const dispacth = useAppDispatch();

  const handleSetProfile = async (
    data: Promise<ProfileStateType>
  ): Promise<void> => {
    const result = await data;

    if (result) {
      dispacth(setProfile(result));
    }

    return;
  };

  return {
    profile: {
      id,
      frontPage,
      avatar,
      username,
      title,
      description,
      status,
    },
    handleSetProfile,
  };
};
