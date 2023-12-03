import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const PublicRoutes = lazy(() => import("./routes/PublicRoutes"));

const PortfolioRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense
            fallback={<Loader className="w-screen h-screen bg-black"></Loader>}
          >
            <PublicRoutes></PublicRoutes>
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};

export default PortfolioRouter;
