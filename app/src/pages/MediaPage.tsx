import { ImgMedia } from "../components/ImgMedia/ImgMedia";
import { Paginator } from "../components/Paginator/Paginator";
import { PublicationType } from "../entities/types";
import { usePaginator } from "../hooks/usePaginator";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";

export const MediaPage = (): JSX.Element => {
  const { theme } = useUiStore();
  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    handleSetPage,
  } = usePaginator({
    page: 1,
    perPage: 9,
  });

  return (
    <>
      <MainLayout>
        <section
          className={`px-2 w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
            theme ? "bg-primaryWhite" : "bg-primaryBlack"
          }`}
          ref={parentRef}
        >
          <article className="grid grid-cols-3 gap-2 mt-2 w-full h-full">
            {publications
              .sort((pub, pub2) => pub2.isPinned - pub.isPinned)
              .map((publication: PublicationType) => {
                return (
                  <ImgMedia
                    key={publication.id}
                    src={publication.link}
                    alt={publication.title}
                    id={publication.id}
                    title={publication.title}
                  ></ImgMedia>
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
