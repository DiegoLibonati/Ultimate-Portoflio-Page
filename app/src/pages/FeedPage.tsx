import { Paginator } from "../components/Paginator/Paginator";
import { usePaginator } from "../hooks/usePaginator";
import { usePublicationsFeedStore } from "../hooks/usePublicationsFeedStore";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { useRouter } from "../hooks/useRouter";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { Publication, PublicationFeed } from "../entities/entities";

const PublicationFeedLazy = lazy(() => import("../components/Publication/Publication"));

const FeedPage = (): JSX.Element => {
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
    perPage: 4,
    customArr: publicationsFeed,
  });

  return (
    <MainLayout>
      <section
        className={`flex relative flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
        ref={parentRef}
        key="feed_page"
      >
        {publications.map((publication: Publication) => {
          return (
            <Suspense
              fallback={<Loader className="w-full h-full my-6"></Loader>}
              key={publication.id}
            >
              <PublicationFeedLazy
                publication={publication}
                section="publication"
              ></PublicationFeedLazy>
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

export default FeedPage;
