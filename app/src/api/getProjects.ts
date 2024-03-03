import { Project } from "../entities/entities";

export const getProjects = async (): Promise<Project[]> => {
  try {
    const result = await fetch("/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const projects: Project[] = await result.json();
    return projects;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
