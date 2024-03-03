import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { useUiStore } from "../hooks/useUiStore";
import { Project } from "../entities/entities";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { useProjectsStore } from "../hooks/useProjectsStore";
import { getProject } from "../api/getProject";

const Publication = lazy(() => import("../components/Publication/Publication"));

const ProjectPage = (): JSX.Element => {
  const { params, redirectTo } = useRouter();
  const { activeProject, handleSetProject } = useProjectsStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const project = getProject(params.id);

    project.then((res: Project) => {
      if (!res) {
        return redirectTo("/feed/1");
      }
    });

    handleSetProject(project);
  }, []);

  return (
    <MainLayout>
      <section
        className={`flex flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
      >
        <Suspense fallback={<Loader className="w-full h-full my-6"></Loader>}>
          <Publication
            publication={activeProject!}
            section="project"
          ></Publication>
        </Suspense>
      </section>
    </MainLayout>
  );
};

export default ProjectPage;
