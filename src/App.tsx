import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { BurgerMenu } from "./components/BurgerMenu";
import { Footer } from "./components/Footer";
import { PortfolioItemPage } from "./components/PortfolioItemPage";
import { SinglePage } from "./components/SinglePage"; // Importando o componente Home

import "./styles/index.css";

function App() {
  return (
    <Router>
      <BurgerMenu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/portfolio/:itemId" element={<PortfolioItemPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
