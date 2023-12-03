import { lazy, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

const PortfolioRouter = lazy(() => import("./router/PortfolioRouter"));

function App(): JSX.Element {
  return (
    <HashRouter>
      <Suspense
        fallback={<Loader className="w-screen h-screen bg-black"></Loader>}
      >
        <PortfolioRouter></PortfolioRouter>
      </Suspense>
    </HashRouter>
  );
}

export default App;
