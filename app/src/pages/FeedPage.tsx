import { Paginator } from "../components/Paginator/Paginator";
import { PublicationType } from "../entities/types";
import { usePaginator } from "../hooks/usePaginator";
import { usePublicationsStore } from "../hooks/usePublicationsStore";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { useRouter } from "../hooks/useRouter";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const Publication = lazy(() => import("../components/Publication/Publication"));

const FeedPage = (): JSX.Element => {
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
    perPage: 4,
    customArr: arrPublications,
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
        {publications
          .sort((pub, pub2) => pub2.isPinned - pub.isPinned)
          .map((publication: PublicationType) => {
            return (
              <Suspense
                fallback={<Loader className="my-6"></Loader>}
                key={publication.id}
              >
                <Publication
                  publication={publication}
                  section="publication"
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

export default FeedPage;
