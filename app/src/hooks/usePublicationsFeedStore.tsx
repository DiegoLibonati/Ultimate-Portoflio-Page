import { RootState } from "../entities/entities";
import {
  PublicationFeed,
  UsePublicationsFeedStore,
} from "../entities/entities";
import {
  setPublicationFeed,
  setPublicationsFeed,
} from "../store/publicationsFeed/publicationsFeedSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const usePublicationsFeedStore = (): UsePublicationsFeedStore => {
  const { activePublicationFeed, publicationsFeed } = useAppSelector(
    (state: RootState) => state.publicationsFeed
  );
  const dispatch = useAppDispatch();

  const handleSetPublicationsFeed = async (
    publicationsFeed: Promise<PublicationFeed[]>
  ): Promise<void> => {
    dispatch(setPublicationsFeed(await publicationsFeed));
    return;
  };

  const handleSetPublicationFeed = async (
    publicationFeed: Promise<PublicationFeed>
  ): Promise<void> => {
    dispatch(setPublicationFeed(await publicationFeed));
    return;
  };

  return {
    activePublicationFeed,
    publicationsFeed,
    handleSetPublicationFeed,
    handleSetPublicationsFeed,
  };
};
