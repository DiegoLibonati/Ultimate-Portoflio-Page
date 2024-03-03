import { Paginator } from "../components/Paginator/Paginator";
import { Work } from "../entities/entities";
import { usePaginator } from "../hooks/usePaginator";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { useWorksStore } from "../hooks/useWorksStore";

const Publication = lazy(() => import("../components/Publication/Publication"));

const WorksPage = (): JSX.Element => {
  const { params } = useRouter();
  const { theme } = useUiStore();
  const { works } = useWorksStore();

  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    originalElementsToRender,
    handleSetPage,
  } = usePaginator<Work>({
    page: Number(params.page),
    perPage: 4,
    customArr: works,
  });

  return (
    <MainLayout>
      <section
        className={`flex relative flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
        ref={parentRef}
        key="works_page"
      >
        {publications.map((work: Work) => {
          return (
            <Suspense
              fallback={<Loader className="w-full h-full my-6"></Loader>}
              key={work.id}
            >
              <Publication publication={work} section="work"></Publication>
            </Suspense>
          );
        })}

        <Paginator
          actualPage={actualPage}
          elementsToRender={elementsToRender}
          allElementsToRender={originalElementsToRender}
          handleSetPage={handleSetPage}
        ></Paginator>
      </section>
    </MainLayout>
  );
};

export default WorksPage;
