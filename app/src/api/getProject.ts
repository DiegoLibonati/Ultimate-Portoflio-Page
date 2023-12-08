import { ProjectType } from "../entities/types";

export const getProject = async (id: string): Promise<ProjectType> => {
  try {
    const result = await fetch("/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const projects = await result.json();
    const project = projects.filter(
      (project: ProjectType) => project.id === Number(id)
    )[0];

    return project;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
