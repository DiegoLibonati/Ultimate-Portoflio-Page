import { ProjectType } from "../entities/types";

export const getProjects = async (): Promise<ProjectType[]> => {
  try {
    const result = await fetch("/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const projects = await result.json();
    return projects;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
