import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useRouter } from "../../hooks/useRouter";
import { getProfile } from "../../api/getProfile";
import { getPublicationsFeed } from "../../api/getPublicationsFeed";
import { NavBar } from "../../components/NavBar/NavBar";
import { Loader } from "../../components/Loader/Loader";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { useProfileStore } from "../../hooks/useProfileStore";
import { useUiStore } from "../../hooks/useUiStore";
import { usePublicationsFeedStore } from "../../hooks/usePublicationsFeedStore";
import { Footer } from "../../components/Footer/Footer";
import { routes } from "../../constants/routes";
import { useProjectsStore } from "../../hooks/useProjectsStore";
import { getProjects } from "../../api/getProjects";
import { useCertificatesStore } from "../../hooks/useCertificatesStore";
import { useWorksStore } from "../../hooks/useWorksStore";
import { getCertificates } from "../../api/getCertificates";
import { getWorks } from "../../api/getWorks";
import { getApis } from "../../api/getApis";
import { useApisStore } from "../../hooks/useApisStore";

const Image = lazy(() => import("../../components/Image/Image"));

const PublicRoutes = (): JSX.Element => {
  const { pathname, redirectTo } = useRouter();
  const { isMobile } = useCheckMobileScreen();
  const { theme } = useUiStore();
  const { profile, handleSetProfile } = useProfileStore();
  const { projects, handleSetProjects } = useProjectsStore();
  const { certificates, handleSetCertificates } = useCertificatesStore();
  const { works, handleSetWorks } = useWorksStore();
  const { publicationsFeed, handleSetPublicationsFeed } =
    usePublicationsFeedStore();
  const { apis, handleSetApis } = useApisStore();

  useEffect(() => {
    if (!profile.id) {
      const profileData = getProfile();
      handleSetProfile(profileData);
    }

    if (pathname === "/") return redirectTo("/feed/1");

    if (
      (pathname.includes("feed") || pathname.includes("media")) &&
      publicationsFeed.length === 0
    ) {
      const publicationsFeed = getPublicationsFeed();
      handleSetPublicationsFeed(publicationsFeed);
    }

    if (pathname.includes("projects") && projects.length === 0) {
      const projects = getProjects();
      handleSetProjects(projects);
    }

    if (pathname.includes("certificates") && certificates.length === 0) {
      const certificates = getCertificates();
      handleSetCertificates(certificates);
    }

    if (pathname.includes("freelance") && works.length === 0) {
      const works = getWorks();
      handleSetWorks(works);
    }

    if (pathname.includes("apis") && apis.length === 0) {
      const apis = getApis();
      handleSetApis(apis);
    }
  }, [pathname]);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <Suspense
                  fallback={
                    <Loader className="h-screen w-screen bg-black"></Loader>
                  }
                >
                  <route.element />
                </Suspense>
              }
            ></Route>
          );
        })}

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
