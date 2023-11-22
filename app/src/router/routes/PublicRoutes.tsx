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

export const PublicRoutes = (): JSX.Element => {
  const { pathname, redirectTo } = useRouter();
  const { handleSetProfile } = useProfileStore();
  const { handleSetPublications } = usePublicationsStore();

  useEffect(() => {
    const profileData = getProfile();
    handleSetProfile(profileData);

    const publications = getPublications();
    handleSetPublications(publications);

    if (pathname === "/") return redirectTo("/feed");
  }, [pathname]);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/feed" element={<FeedPage></FeedPage>}></Route>
        <Route path="/media" element={<MediaPage></MediaPage>}></Route>
        <Route path="/links" element={<LinksPage></LinksPage>}></Route>
        <Route
          path="/publication/:id"
          element={<PublicationPage></PublicationPage>}
        ></Route>
        <Route path="/*" element={<Navigate to="/feed"></Navigate>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};
