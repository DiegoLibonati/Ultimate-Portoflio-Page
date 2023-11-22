import { PublicationType, UsePublicationsStore } from "../entities/types";
import {
  setLikes,
  setPublication,
  setPublications,
} from "../store/publications/publicationsSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const usePublicationsStore = (): UsePublicationsStore => {
  const { activePublication, publications } = useAppSelector(
    (state) => state.publications
  );
  const dispatch = useAppDispatch();

  const handleSetPublications = async (
    publications: Promise<PublicationType[]>
  ): Promise<void> => {
    dispatch(setPublications(await publications));
    return;
  };

  const handleSetPublication = async (
    publication: Promise<PublicationType>
  ): Promise<void> => {
    dispatch(setPublication(await publication));
    return;
  };

  const handleEditLikes = async (
    idPublication: number | undefined,
    likes: number
  ): Promise<void> => {
    dispatch(setLikes({ idPublication: idPublication, likes: likes }));
    return;
  };

  return {
    activePublication,
    publications,
    handleSetPublication,
    handleSetPublications,
    handleEditLikes,
  };
};
