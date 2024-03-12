/// <reference types="vite/client" />

import { store } from "../store/store";

// TYPES

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Profile = {
  id: number;
  frontPage: string;
  avatar: string;
  username: string;
  title: string;
  description: string;
  status: string;
};

export type PublicationFeed = {
  id: number;
  isPinned: number;
  date: string;
  status: string;
  title: string;
  description: string;
  link: string;
  ubication: string;
};

export type Link = {
  linkedin: string;
  instagram: string;
  links: string;
  portfolio: string;
  github: string;
};

export type UiState = {
  theme: boolean;
  alert: Alert;
};

export type Alert = {
  status: boolean;
  message: string;
  type: string;
};

export type ProfileState = {
  id: number;
  frontPage: string;
  avatar: string;
  username: string;
  title: string;
  description: string;
  status: string;
};

export type PublicationFeedState = {
  publicationsFeed: PublicationFeed[];
  activePublicationFeed: PublicationFeed | null;
};

export type Tab = { id: string; route: string; text: string };

export type ParseDate = {
  date: string;
};

export type Project = {
  id: number;
  isPinned: number;
  date: string;
  status: string;
  title: string;
  link: string;
  description: string;
  github: string;
  avatarLanguage: string;
  avatarLanguage2: string;
};

export type Work = {
  id: number;
  isPinned: number;
  date: string;
  status: string;
  name: string;
  link: string;
  description: string;
  reference: string;
};

export type Publication = Partial<
  Work & PublicationFeed & Project & Certificate
>;

export type Route = {
  id: string;
  path: string;
  element: ReactNode;
};

export type LinkTree = {
  id: string;
  text: string;
  redirect: string;
  iconElement: IconType;
};

export type ProjectState = {
  projects: Project[];
  activeProject: Project | null;
};

export type Certificate = {
  id: number;
  isPinned: number;
  date: string;
  status: string;
  link: string;
  title: string;
  description: string;
};

export type CertificateState = {
  certificates: Certificate[];
  activeCertificate: Certificate | null;
};

export type WorkState = {
  works: Work[];
  activeWork: Work | null;
};

// TYPES CUSTOM HOOKS

export type UseTruncate = {
  shouldTruncate: boolean;
  readMore: boolean;
  elementRef: (node: HTMLParagraphElement) => void;
  setReadMore: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UsePublicationsFeedStore = {
  publicationsFeed: PublicationFeed[];
  activePublicationFeed: PublicationFeed | null;
  handleSetPublicationFeed: (publicationFeed: Promise<PublicationFeed>) => void;
  handleSetPublicationsFeed: (
    publicationsFeed: Promise<PublicationFeed[]>
  ) => void;
};

export type UsePaginator<T> = {
  publications: T[];
  parentRef: MutableRefObject<HTMLElement | null>;
  actualPage: number;
  elementsToRender: number[];
  originalElementsToRender: number[];
  handleSetPage: (page: number) => void;
};

export type UseProfileStore = {
  profile: Profile;
  handleSetProfile: (data: Promise<Profile>) => void;
};

export type UseCheckMobileScreen = {
  isMobile: boolean;
};

export type UseUiStore = {
  theme: boolean;
  alert: Alert;
  handleSetTheme: () => void;
  handleSetAlert: (status: boolean, message: string, type: string) => void;
};

export type UseScroll = {
  scrolled: boolean;
};

export type UseRouter = {
  pathnameLen: number;
  pathname: string;
  firstPath: string;
  pathIsActive: string;
  params: Readonly<Params<string>>;
  redirectTo: (path: string) => void;
  redirectToError: () => void;
};

export type UseProjectsStore = {
  activeProject: Project | null;
  projects: Project[];
  handleSetProject: (project: Promise<Project>) => Promise<void>;
  handleSetProjects: (projects: Promise<Project[]>) => Promise<void>;
};

export type UseCertificatesStore = {
  activeCertificate: Certificate | null;
  certificates: Certificate[];
  handleSetCertificate: (certificate: Promise<Certificate>) => Promise<void>;
  handleSetCertificates: (
    certificates: Promise<Certificate[]>
  ) => Promise<void>;
};

export type UseWorksStore = {
  activeWork: Work | null;
  works: Work[];
  handleSetWork: (work: Promise<Work>) => Promise<void>;
  handleSetWorks: (works: Promise<Work[]>) => Promise<void>;
};

// INTERFACES PROPS

export interface LoaderProps {
  className?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  className: string;
  width: string | number;
  height: string | number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export interface UsePaginatorProps<T> {
  page: number;
  perPage: number;
  customArr: T[];
}

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface IframeProps {
  className: string;
  src: string;
  title: string;
}

export interface TagProps {
  icon?: JSX.Element;
  textTag: string;
  isLink?: boolean;
  onClickTag?: React.MouseEventHandler<HTMLDivElement>;
}

export interface TabProps {
  tabRoute: string;
  tabText: string;
  index: number;
}

export interface PaginatorProps {
  actualPage: number;
  elementsToRender: number[];
  allElementsToRender: number[];
  handleSetPage: (page: number) => void;
}

export interface ButtonPaginatorProps {
  actualPage: number;
  element: number;
  arialLabel: string;
  handleSetPage: (page: number) => void;
}

export interface PublicationProps {
  section: string;
  publication: Publication;
}

export interface ButtonPublicationProps {
  id?: string;
  children: React.ReactNode;
  hasMargin?: boolean;
  arialLabel: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface UseTruncateProps {
  propertyValue: string;
  fontType: string;
}

export interface ImgMediaProps {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export interface LinkProps {
  children: React.ReactNode;
  linkText: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

// INTERFACES PAYLOADS

export interface PayloadUi {
  alert: Alert;
}

export interface PayloadProfile {
  profile: Profile;
}

export interface PayloadPublicationFeed {
  publicationsFeed: PublicationFeed[];
  activePublicationFeed: PublicationFeed;
}

export interface PayloadProjects {
  projects: Project[];
  activeProject: Project;
}

export interface PayloadCertificates {
  certificates: Certificate[];
  activeCertificate: Certificate;
}

export interface PayloadWork {
  works: Work[];
  activeWork: Work;
}
