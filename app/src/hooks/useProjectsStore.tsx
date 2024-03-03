import { Project, RootState, UseProjectsStore } from "../entities/entities";
import { setProject, setProjects } from "../store/projects/projectsSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useProjectsStore = (): UseProjectsStore => {
  const { activeProject, projects } = useAppSelector(
    (state: RootState) => state.projects
  );
  const dispatch = useAppDispatch();

  const handleSetProjects = async (
    projects: Promise<Project[]>
  ): Promise<void> => {
    dispatch(setProjects(await projects));
    return;
  };

  const handleSetProject = async (project: Promise<Project>): Promise<void> => {
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
