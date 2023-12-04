import { Paginator } from "../components/Paginator/Paginator";

import { PublicationType } from "../entities/types";
import { usePaginator } from "../hooks/usePaginator";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { useProjectsStore } from "../hooks/useProjectsStore";

const Publication = lazy(() => import("../components/Publication/Publication"));

const ProjectsPage = (): JSX.Element => {
  const { params } = useRouter();
  const { theme } = useUiStore();
  const { projects } = useProjectsStore();

  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    handleSetPage,
  } = usePaginator({
    page: Number(params.page),
    perPage: 4,
    customArr: projects,
  });

  return (
    <MainLayout>
      <section
        className={`flex relative flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
        ref={parentRef}
        key="projects_page"
      >
        {publications.map((publication: PublicationType) => {
          return (
            <Suspense
              fallback={<Loader className="my-6"></Loader>}
              key={publication.id}
            >
              <Publication
                publication={publication}
                section="project"
              ></Publication>
            </Suspense>
          );
        })}

        <Paginator
          actualPage={actualPage}
          elementsToRender={elementsToRender}
          handleSetPage={handleSetPage}
        ></Paginator>
      </section>
    </MainLayout>
  );
};

export default ProjectsPage;
