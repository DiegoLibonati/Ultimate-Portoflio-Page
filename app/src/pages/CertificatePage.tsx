import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { Publication } from "../components/Publication/Publication";
import { getCertificate } from "../api/getCertificate";
import { useUiStore } from "../hooks/useUiStore";
import { PublicationType } from "../entities/types";
import { useCertificatesStore } from "../hooks/useCertificatesStore";

export const CertificatePage = () => {
  const { params, redirectTo } = useRouter();
  const { activeCertificate, handleSetCertificate } = useCertificatesStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const certificate = getCertificate(params.id);

    certificate.then((cer: PublicationType) => {
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
        <Publication
          publication={activeCertificate}
          section="certificate"
        ></Publication>
      </section>
    </MainLayout>
  );
};
