import { lazy } from "react";
import { Route } from "../entities/entities";

const FeedPage = lazy(() => import("../pages/FeedPage"));
const MediaPage = lazy(() => import("../pages/MediaPage"));
const PublicationPage = lazy(() => import("../pages/PublicationPage"));
const LinksPage = lazy(() => import("../pages/LinksPage"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const CertificatePage = lazy(() => import("../pages/CertificatePage"));
const CertificatesPage = lazy(() => import("../pages/CertificatesPage"));
const WorkPage = lazy(() => import("../pages/WorkPage"));
const WorksPage = lazy(() => import("../pages/WorksPage"));
const ApisPage = lazy(() => import("../pages/ApisPage"));

export const routes: Route[] = [
  {
    id: "feed_page_element",
    path: "/feed/:page",
    element: FeedPage,
  },
  {
    id: "media_page_element",
    path: "/media/:page",
    element: MediaPage,
  },
  {
    id: "publication_page_element",
    path: "/publication/:id",
    element: PublicationPage,
  },
  {
    id: "links_page_element",
    path: "/links",
    element: LinksPage,
  },
  {
    id: "projects_page_element",
    path: "/projects/:page",
    element: ProjectsPage,
  },
  {
    id: "project_page_element",
    path: "/project/:id",
    element: ProjectPage,
  },
  {
    id: "certificates_page_element",
    path: "/certificates/:page",
    element: CertificatesPage,
  },
  {
    id: "certificate_page_element",
    path: "/certificate/:id",
    element: CertificatePage,
  },
  {
    id: "works_page_element",
    path: "/freelance/:page",
    element: WorksPage,
  },
  {
    id: "work_page_element",
    path: "/work/:id",
    element: WorkPage,
  },
  {
    id: "apis_page_element",
    path: "/apis/:page",
    element: ApisPage,
  },
];
