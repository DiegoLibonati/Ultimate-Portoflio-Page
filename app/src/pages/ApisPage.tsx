import { Paginator } from "../components/Paginator/Paginator";
import { Api } from "../entities/entities";
import { usePaginator } from "../hooks/usePaginator";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { useApisStore } from "../hooks/useApisStore";

const Card = lazy(() => import("../components/Card/Card"));

const ApisPage = (): JSX.Element => {
  const { params } = useRouter();
  const { theme } = useUiStore();
  const { apis } = useApisStore();

  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    originalElementsToRender,
    handleSetPage,
  } = usePaginator<Api>({
    page: Number(params.page),
    perPage: 4,
    customArr: apis,
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
        {publications.map((api: Api) => {
          return (
            <Suspense
              fallback={<Loader className="w-full h-full my-6"></Loader>}
              key={api.id}
            >
              <Card api={api} key={api.id}></Card>
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

export default ApisPage;
