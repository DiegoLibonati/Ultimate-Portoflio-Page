import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UseRouterType } from "../entities/types";
import { useState, useEffect } from "react";

export const useRouter = (): UseRouterType => {
  const [pathIsActive, setPathIsActive] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const redirectTo = (path: string): void => {
    navigate(path);
    window.scrollTo({ top: 0 });
    return;
  };

  const redirectToError = (): void => {
    redirectTo("/404");
    return;
  };

  useEffect(() => {
    setPathIsActive(location.pathname);
  }, [location.pathname]);

  return {
    pathname: location.pathname,
    pathnameLen: location.pathname.split("/").filter((path) => {
      return path !== "";
    }).length,
    firstPath: location.pathname.split("/").filter((path) => {
      return path !== "";
    })[0],
    pathIsActive,
    params,
    redirectTo: redirectTo,
    redirectToError,
  };
};
