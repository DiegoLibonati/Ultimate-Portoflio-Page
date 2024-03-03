import { Paginator } from "../components/Paginator/Paginator";
import { Certificate } from "../entities/entities";
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
    originalElementsToRender,
    handleSetPage,
  } = usePaginator<Certificate>({
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
        {publications.map((certificate: Certificate) => {
          return (
            <Suspense
              fallback={<Loader className="w-full h-full my-6"></Loader>}
              key={certificate.id}
            >
              <Publication
                publication={certificate}
                section="certificate"
              ></Publication>
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

export default CertificatesPage;
