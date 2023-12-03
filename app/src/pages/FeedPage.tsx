import { Paginator } from "../components/Paginator/Paginator";
import { Publication } from "../components/Publication/Publication";
import { PublicationType } from "../entities/types";
import { usePaginator } from "../hooks/usePaginator";
import { usePublicationsStore } from "../hooks/usePublicationsStore";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { useRouter } from "../hooks/useRouter";

export const FeedPage = (): JSX.Element => {
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
      >
        {publications
          .sort((pub, pub2) => pub2.isPinned - pub.isPinned)
          .map((publication: PublicationType) => {
            return (
              <Publication
                key={publication.id}
                publication={publication}
                section="publication"
              ></Publication>
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
