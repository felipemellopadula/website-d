import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BurgerMenu } from "./components/BurgerMenu";
import { Footer } from "./components/Footer";
import { PortfolioItemPage } from "./components/PortfolioItemPage";
import { SinglePage } from "./components/SinglePage";

import "./styles/index.css";

function App() {
  return (
    <Router>
      <BurgerMenu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/servicos" element={<SinglePage section="servicos" />} />
          <Route
            path="/portfolio"
            element={<SinglePage section="portfolio" />}
          />
          <Route path="/agencia" element={<SinglePage section="agencia" />} />
          <Route path="/contato" element={<SinglePage section="contato" />} />
          <Route path="/portfolio/:itemId" element={<PortfolioItemPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
