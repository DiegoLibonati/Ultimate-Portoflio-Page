import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/PublicRoutes";

export const PortfolioRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes></PublicRoutes>}></Route>
    </Routes>
  );
};
