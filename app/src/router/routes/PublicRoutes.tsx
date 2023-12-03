import { Routes, Route, Navigate } from "react-router-dom";
import { FeedPage } from "../../pages/FeedPage";
import { useRouter } from "../../hooks/useRouter";
import { useEffect } from "react";
import { MediaPage } from "../../pages/MediaPage";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { LinksPage } from "../../pages/LinksPage";
import { getProfile } from "../../api/getProfile";
import { useProfileStore } from "../../hooks/useProfileStore";
import { PublicationPage } from "../../pages/PublicationPage";
import { getPublications } from "../../api/getPublications";
import { usePublicationsStore } from "../../hooks/usePublicationsStore";
import { images } from "../../assets/exports";
import { useUiStore } from "../../hooks/useUiStore";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { CertificatesPage } from "../../pages/CertificatesPage";
import { getCertificates } from "../../api/getCertificates";
import { useCertificatesStore } from "../../hooks/useCertificatesStore";
import { CertificatePage } from "../../pages/CertificatePage";

export const PublicRoutes = (): JSX.Element => {
  const { pathname, redirectTo } = useRouter();
  const { profile, handleSetProfile } = useProfileStore();
  const { publications, handleSetPublications } = usePublicationsStore();
  const { certificates, handleSetCertificates } = useCertificatesStore();
  const { theme } = useUiStore();
  const { isMobile } = useCheckMobileScreen();

  useEffect(() => {
    if (!profile.id) {
      const profileData = getProfile();
      handleSetProfile(profileData);
    }

    if (publications.length === 0) {
      const publications = getPublications();
      handleSetPublications(publications);
    }

    if (pathname === "/") return redirectTo("/feed/1");
    if (pathname.includes("certificates") && certificates.length === 0) {
      const certificates = getCertificates();
      handleSetCertificates(certificates);
    }
  }, [pathname]);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/feed/:page" element={<FeedPage></FeedPage>}></Route>
        <Route
          path="/certificates/:page"
          element={<CertificatesPage></CertificatesPage>}
        ></Route>
        <Route path="/media/:page" element={<MediaPage></MediaPage>}></Route>
        <Route path="/links" element={<LinksPage></LinksPage>}></Route>
        <Route
          path="/publication/:id"
          element={<PublicationPage></PublicationPage>}
        ></Route>
        <Route
          path="/certificate/:id"
          element={<CertificatePage></CertificatePage>}
        ></Route>
        <Route path="/*" element={<Navigate to="/feed/1"></Navigate>}></Route>
      </Routes>
      {!isMobile && (
        <img
          src={theme ? images.lightDl : images.nightDL}
          alt="imagen"
          className="fixed bottom-0 right-0 w-32 h-32 object-cover opacity-30"
        ></img>
      )}
      <Footer></Footer>
    </>
  );
};
