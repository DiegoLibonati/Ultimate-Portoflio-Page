import { Paginator } from "../components/Paginator/Paginator";
import { Publication } from "../components/Publication/Publication";
import { PublicationType } from "../entities/types";
import { useCertificatesStore } from "../hooks/useCertificatesStore";
import { usePaginator } from "../hooks/usePaginator";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";

export const CertificatesPage = (): JSX.Element => {
  const { params } = useRouter();
  const { theme } = useUiStore();
  const { certificates } = useCertificatesStore();

  const {
    publications,
    parentRef,
    actualPage,
    elementsToRender,
    handleSetPage,
  } = usePaginator({
    page: Number(params.page),
    perPage: 4,
    customArr: certificates,
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
                section="certificate"
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
