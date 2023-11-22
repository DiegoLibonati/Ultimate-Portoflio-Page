import { useEffect, useState } from "react";
import { UseLikesReturnType, UseLikesType } from "../entities/types";
import { putLikes } from "../api/putLikes";
import { usePublicationsStore } from "./usePublicationsStore";

export const useLikes = ({
  idPublication,
}: UseLikesType): UseLikesReturnType => {
  const [likes, setLikes] = useState<number>(0);
  const [buttonEffect, setButtonEffect] = useState<boolean>(false);
  const { handleEditLikes } = usePublicationsStore();

  const handleSetLikes = (paramLike: number = 0): void => {
    if (paramLike === -1) {
      setLikes(0);
    }
    setButtonEffect(true);
    if (paramLike === 0) {
      setLikes(likes + 1);
      return;
    }

    setLikes(paramLike);

    return;
  };

  const handleEditPublication = async (
    idPublication: number | undefined,
    likes: number
  ): Promise<void> => {
    const result = await putLikes({
      id: idPublication,
      likes: likes,
    });
    handleEditLikes(result.id, result.likes);
    return;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (likes > 0) {
        handleEditPublication(idPublication, likes);
        handleSetLikes(-1);
        setButtonEffect(false);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [likes]);

  return {
    likes,
    buttonEffect,
    handleSetLikes,
  };
};
