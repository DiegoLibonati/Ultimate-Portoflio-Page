import { Routes, Route, Navigate } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";
import { useEffect, lazy, Suspense } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { getProfile } from "../../api/getProfile";
import { useProfileStore } from "../../hooks/useProfileStore";
import { getPublications } from "../../api/getPublications";
import { usePublicationsStore } from "../../hooks/usePublicationsStore";
import { useUiStore } from "../../hooks/useUiStore";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { getCertificates } from "../../api/getCertificates";
import { useCertificatesStore } from "../../hooks/useCertificatesStore";
import { Loader } from "../../components/Loader/Loader";
import { useProjectsStore } from "../../hooks/useProjectsStore";
import { getProjects } from "../../api/getProjects";
import { useWorksStore } from "../../hooks/useWorksStore";
import { getWorks } from "../../api/getWorks";

const FeedPage = lazy(() => import("../../pages/FeedPage"));
const CertificatesPage = lazy(() => import("../../pages/CertificatesPage"));
const MediaPage = lazy(() => import("../../pages/MediaPage"));
const LinksPage = lazy(() => import("../../pages/LinksPage"));
const PublicationPage = lazy(() => import("../../pages/PublicationPage"));
const CertificatePage = lazy(() => import("../../pages/CertificatePage"));
const ProjectPage = lazy(() => import("../../pages/ProjectPage"));
const ProjectsPage = lazy(() => import("../../pages/ProjectsPage"));
const WorkPage = lazy(() => import("../../pages/WorkPage"));
const WorksPage = lazy(() => import("../../pages/WorksPage"));
const Image = lazy(() => import("../../components/Image/Image"));

const PublicRoutes = (): JSX.Element => {
  const { pathname, redirectTo } = useRouter();
  const { profile, handleSetProfile } = useProfileStore();
  const { publications, handleSetPublications } = usePublicationsStore();
  const { certificates, handleSetCertificates } = useCertificatesStore();
  const { projects, handleSetProjects } = useProjectsStore();
  const { works, handleSetWorks } = useWorksStore();
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
      console.log(certificates);
      handleSetCertificates(certificates);
    }
    if (pathname.includes("projects") && projects.length === 0) {
      const projects = getProjects();
      handleSetProjects(projects);
    }
    if (pathname.includes("freelance") && works.length === 0) {
      const works = getWorks();
      handleSetWorks(works);
    }
  }, [pathname]);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/feed/:page"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <FeedPage></FeedPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/certificates/:page"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <CertificatesPage></CertificatesPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/media/:page"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <MediaPage></MediaPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/projects/:page"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <ProjectsPage></ProjectsPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/freelance/:page"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <WorksPage></WorksPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/links"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <LinksPage></LinksPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/publication/:id"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <PublicationPage></PublicationPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/certificate/:id"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <CertificatePage></CertificatePage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/work/:id"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <WorkPage></WorkPage>
            </Suspense>
          }
        ></Route>
        <Route
          path="/project/:id"
          element={
            <Suspense
              fallback={
                <Loader className="h-screen w-screen bg-black"></Loader>
              }
            >
              <ProjectPage></ProjectPage>
            </Suspense>
          }
        ></Route>
        <Route path="/*" element={<Navigate to="/feed/1"></Navigate>}></Route>
      </Routes>
      {!isMobile && (
        <Suspense fallback={<Loader className="w-32 h-32"></Loader>}>
          <Image
            src={
              theme
                ? "https://www.diegolibonati.com.ar/images/sDL.png"
                : "https://www.diegolibonati.com.ar/images/nDL.png"
            }
            alt="imagen"
            className="fixed bottom-0 right-0 w-32 h-32 object-cover opacity-30"
            width={"100%"}
            height={"100%"}
          ></Image>
        </Suspense>
      )}
      <Footer></Footer>
    </>
  );
};

export default PublicRoutes;
