import { Work } from "../entities/entities";

export const getWork = async (id: string): Promise<Work> => {
  try {
    const result = await fetch("/works.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const works: Work[] = await result.json();
    const work = works.find((work: Work) => work.id === Number(id));

    return work!;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
