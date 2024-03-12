import { lazy, Suspense, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import { useUiStore } from "./hooks/useUiStore";

const PortfolioRouter = lazy(() => import("./router/PortfolioRouter"));

export const App = (): JSX.Element => {
  const { theme } = useUiStore();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (theme) body.style.backgroundColor = "white";
    else body.style.backgroundColor = "black";
  }, [theme]);

  return (
    <HashRouter>
      <Suspense
        fallback={<Loader className="w-screen h-screen bg-black"></Loader>}
      >
        <PortfolioRouter></PortfolioRouter>
      </Suspense>
    </HashRouter>
  );
};
