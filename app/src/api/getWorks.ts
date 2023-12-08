import { WorkType } from "../entities/types";

export const getWorks = async (): Promise<WorkType[]> => {
  try {
    const result = await fetch("/works.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const works = await result.json();
    return works;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
