import { Work } from "../entities/entities";

export const getWorks = async (): Promise<Work[]> => {
  try {
    const result = await fetch("/works.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const works: Work[] = await result.json();
    return works;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
