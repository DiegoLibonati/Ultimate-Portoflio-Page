import { ProjectType, UseProjectsStore } from "../entities/types";
import { setProject, setProjects } from "../store/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useProjectsStore = (): UseProjectsStore => {
  const { activeProject, projects } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  const handleSetProjects = async (
    projects: Promise<ProjectType[]>
  ): Promise<void> => {
    dispatch(setProjects(await projects));
    return;
  };

  const handleSetProject = async (
    project: Promise<ProjectType>
  ): Promise<void> => {
    dispatch(setProject(await project));
    return;
  };

  return {
    activeProject,
    projects,
    handleSetProject,
    handleSetProjects,
  };
};
