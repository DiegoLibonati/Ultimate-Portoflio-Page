// useScroll
export type useScrollReturnType = {
  scrolled: boolean;
};

// MainLayout
export type MainLayoutType = {
  children: React.ReactNode;
};

// TagType
export type TagType = {
  icon?: JSX.Element;
  textTag: string;
  isLink?: boolean;
};

// InputType
export type InputType = {
  id: string;
  name: string;
  placeholder: string;
  className: string;
  type: string;
  value: string;
  onChange: (e: ChangeEventHandler<HTMLInputElement>) => void;
};

// useForm
export type useFormReturnType = {
  formValue: Record<string, string>;
  onInputValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

// ProfileStateType
export type ProfileStateType = {
  id: number;
  frontPage: string;
  avatar: string;
  username: string;
  title: string;
  description: string;
  status: string;
};

// useProfileStoreType
export type useProfileStoreType = {
  profile: ProfileStateType;
  handleSetProfile: (data: Promise<ProfileStateType>) => void;
};

// LoaderType
export type LoaderType = {
  className?: string;
};

// useRouter
export type UseRouterType = {
  pathnameLen: number;
  pathname: string;
  firstPath: string;
  pathIsActive: string;
  params: Readonly<Params<string>>;
  redirectTo: (path: string) => void;
  redirectToError: () => void;
};

// TabType
export type TabType = {
  tabRoute: string;
  tabText: string;
};

// ButtonPublicationType
export type ButtonPublicationType = {
  children: React.ReactNode;
  hasMargin?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onTouchStart?: () => void;
};

// useCheckMobileScreen
export type useCheckMobileScreenType = {
  isMobile: boolean;
};

// UseHostType
export type UseHostType = {
  protocol: string;
  hostname: string;
  port: string;
};

// UiStateType
export type UiStateType = {
  theme: boolean;
  alert: {
    status: boolean;
    message: string;
    type: string;
  };
};

// useUiStoreType
export type UseUiStoreType = {
  theme: boolean;
  alert: {
    status: boolean;
    message: string;
    type: string;
  };
  handleSetTheme: () => void;
  handleSetAlert: (status: boolean, message: string, type: string) => void;
};

// UseHoverReturnType
export type UseHoverReturnType = {
  hover: {
    hover1: boolean;
    hover2: boolean;
  };
  handleHoverEnter: (hoverName: string) => void;
  handleHoverLeave: (hoverName: string) => void;
};

// LinkType
export type LinkType = {
  children: React.ReactNode;
  linkText: string;
  link: string;
};

// UsePublicationsStore
export type UsePublicationsStore = {
  activePublication: PublicationType | null;
  publications: PublicationType[];
  handleSetPublication: (
    publication: Promise<PublicationType>
  ) => Promise<void>;
  handleSetPublications: (
    publications: Promise<PublicationType[]>
  ) => Promise<void>;
  handleEditLikes: (
    idPublication: number | undefined,
    likes: number
  ) => Promise<void>;
};

// PublicationType
export type PublicationType = {
  id: number;
  isPinned: number;
  date: string;
  status: string;
  title: string;
  description: string;
  link: string;
  likes: number;
  ubication: string;
};

//PublicationStateType
export type PublicationStateType = {
  publications: PublicationType[];
  activePublication: PublicationType | null;
};

// PublicationComponentType
export type PublicationComponentType = {
  publication: PublicationType | null;
};

// parseDateType
export type parseDateType = {
  date: string;
};

// ImgMediaType
export type ImgMediaType = {
  id: number;
  src: string;
  alt: string;
  likes: number;
};

// UseLikesReturnType
export type UseLikesReturnType = {
  likes: number;
  buttonEffect: boolean;
  handleSetLikes: (paramsLike: number = 0) => void;
};

// PutLikesType
export type PutLikesType = {
  id: number | undefined;
  likes: number;
};

// UseLikesType
export type UseLikesType = {
  idPublication: number | undefined;
};

// usePaginatorType
export type usePaginatorType = {
  page: number;
  perPage: number;
};

// usePaginatorReturnType
export type usePaginatorReturnType = {
  publications: PublicationType[];
  parentRef: LegacyRef<HTMLElement> | undefined;
  actualPage: number;
  elementsToRender: number[];
  handleSetPage: (page: number) => void;
};

// PaginatorType
export type PaginatorType = {
  actualPage: number;
  elementsToRender: number[];
  handleSetPage: (page: number) => void;
};

// ButtonPaginatorType
export type ButtonPaginatorType = {
  actualPage: number;
  element: number;
  handleSetPage: (page: number) => void;
};
