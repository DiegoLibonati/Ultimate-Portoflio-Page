import { PublicationFeed } from "../entities/entities";

export const getPublicationsFeed = async (): Promise<PublicationFeed[]> => {
  try {
    const result = await fetch("/feed.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const publicationsFeed: PublicationFeed[] = await result.json();
    return publicationsFeed;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
