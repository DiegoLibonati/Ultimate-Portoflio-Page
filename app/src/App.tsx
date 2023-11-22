import { PortfolioRouter } from "./router/PortfolioRouter";
import { HashRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <HashRouter>
      <PortfolioRouter></PortfolioRouter>
    </HashRouter>
  );
}

export default App;
