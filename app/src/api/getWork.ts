import { WorkType } from "../entities/types";

export const getWork = async (id: string): Promise<WorkType> => {
  try {
    const result = await fetch("/works.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const works = await result.json();
    const work = works.filter((pub: WorkType) => pub.id === Number(id))[0];

    return work;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
