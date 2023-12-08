import { Paginator } from "../components/Paginator/Paginator";
import { PublicationType } from "../entities/types";
import { usePaginator } from "../hooks/usePaginator";
import { usePublicationsStore } from "../hooks/usePublicationsStore";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const ImgMedia = lazy(() => import("../components/ImgMedia/ImgMedia"));

const MediaPage = (): JSX.Element => {
  const { params } = useRouter();
  const { theme } = useUiStore();
  const { publications: arrPublications } = usePublicationsStore();
  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    handleSetPage,
  } = usePaginator({
    page: Number(params.page),
    perPage: 9,
    customArr: arrPublications,
  });

  return (
    <>
      <MainLayout>
        <section
          className={`px-2 w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] 4xl:min-h-[35rem] ${
            theme ? "bg-primaryWhite" : "bg-primaryBlack"
          }`}
          ref={parentRef}
          key="media_page"
        >
          <article className="grid grid-cols-3 gap-2 mt-2 w-full h-full">
            {publications.map((publication: PublicationType) => {
              return (
                <Suspense
                  fallback={<Loader className="w-full h-full"></Loader>}
                  key={publication.id}
                >
                  <ImgMedia
                    src={publication.link}
                    alt={publication.title}
                    id={publication.id}
                    title={publication.title}
                  ></ImgMedia>
                </Suspense>
              );
            })}
          </article>

          <Paginator
            actualPage={actualPage}
            elementsToRender={elementsToRender}
            handleSetPage={handleSetPage}
          ></Paginator>
        </section>
      </MainLayout>
    </>
  );
};

export default MediaPage;
