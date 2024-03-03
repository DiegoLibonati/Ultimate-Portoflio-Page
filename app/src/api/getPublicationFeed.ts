import { PublicationFeed } from "../entities/entities";

export const getPublicationFeed = async (id: string): Promise<PublicationFeed> => {
  try {
    const result = await fetch("/feed.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const publicationsFeed: PublicationFeed[] = await result.json();
    const publicationFeed = publicationsFeed.filter(
      (pub: PublicationFeed) => pub.id === Number(id)
    )[0];

    return publicationFeed;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
