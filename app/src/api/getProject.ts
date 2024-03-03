import { Project } from "../entities/entities";

export const getProject = async (id: string): Promise<Project> => {
  try {
    const result = await fetch("/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const projects: Project[] = await result.json();
    const project = projects.find(
      (project: Project) => project.id === Number(id)
    );

    return project!;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
