import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { getCertificate } from "../api/getCertificate";
import { useUiStore } from "../hooks/useUiStore";
import { Certificate } from "../entities/entities";
import { useCertificatesStore } from "../hooks/useCertificatesStore";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const Publication = lazy(() => import("../components/Publication/Publication"));

const CertificatePage = (): JSX.Element => {
  const { params, redirectTo } = useRouter();
  const { activeCertificate, handleSetCertificate } = useCertificatesStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const certificate = getCertificate(params.id);

    certificate.then((cer: Certificate) => {
      if (!cer) {
        return redirectTo("/feed/1");
      }
    });

    handleSetCertificate(certificate);
  }, []);

  return (
    <MainLayout>
      <section
        className={`flex flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
      >
        <Suspense fallback={<Loader className="w-full h-full my-6"></Loader>}>
          <Publication
            publication={activeCertificate!}
            section="certificate"
          ></Publication>
        </Suspense>
      </section>
    </MainLayout>
  );
};

export default CertificatePage;
