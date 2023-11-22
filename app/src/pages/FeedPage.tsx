import { Paginator } from "../components/Paginator/Paginator";
import { Publication } from "../components/Publication/Publication";
import { PublicationType } from "../entities/types";
import { usePaginator } from "../hooks/usePaginator";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";

export const FeedPage = (): JSX.Element => {
  const { theme } = useUiStore();
  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    handleSetPage,
  } = usePaginator({
    page: 1,
    perPage: 4,
  });

  return (
    <MainLayout>
      <section
        className={`flex relative flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
        ref={parentRef}
      >
        {publications.map((publication: PublicationType) => {
          return (
            <Publication
              key={publication.id}
              publication={publication}
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
