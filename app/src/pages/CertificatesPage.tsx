import { Paginator } from "../components/Paginator/Paginator";

import { PublicationType } from "../entities/types";
import { useCertificatesStore } from "../hooks/useCertificatesStore";
import { usePaginator } from "../hooks/usePaginator";
import { useRouter } from "../hooks/useRouter";
import { useUiStore } from "../hooks/useUiStore";
import { MainLayout } from "../layout/MainLayout";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const Publication = lazy(() => import("../components/Publication/Publication"));

const CertificatesPage = (): JSX.Element => {
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
        key="certificates_page"
      >
        {publications.map((publication: PublicationType) => {
          return (
            <Suspense
              fallback={<Loader className="my-6"></Loader>}
              key={publication.id}
            >
              <Publication
                publication={publication}
                section="certificate"
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

export default CertificatesPage;