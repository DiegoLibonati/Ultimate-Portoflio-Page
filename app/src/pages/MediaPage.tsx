import { Paginator } from "../components/Paginator/Paginator";
import { usePaginator } from "../hooks/usePaginator";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { usePublicationsFeedStore } from "../hooks/usePublicationsFeedStore";
import { PublicationFeed } from "../entities/entities";

const ImgMedia = lazy(() => import("../components/ImgMedia/ImgMedia"));

const MediaPage = (): JSX.Element => {
  const { params } = useRouter();
  const { theme } = useUiStore();
  const { publicationsFeed } = usePublicationsFeedStore();
  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    originalElementsToRender,
    handleSetPage,
  } = usePaginator<PublicationFeed>({
    page: Number(params.page),
    perPage: 9,
    customArr: publicationsFeed,
  });

  return (
    <MainLayout>
      <section
        className={`px-2 w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] 4xl:min-h-[35rem] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
        ref={parentRef}
        key="media_page"
      >
        <article className="grid grid-cols-3 gap-2 mt-2 w-full h-full">
          {publications.map((publication: PublicationFeed) => {
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
          allElementsToRender={originalElementsToRender}
          handleSetPage={handleSetPage}
        ></Paginator>
      </section>
    </MainLayout>
  );
};

export default MediaPage;
