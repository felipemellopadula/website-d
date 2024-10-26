import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importe seus componentes aqui
import { Main } from "../Main";
import { Servicos } from "../Servicos";
import { Portfolio } from "../Portfolio";
import { PortfolioItemPage } from "../PortfolioItemPage";
import { Agencia } from "../Agencia";
import { Contato } from "../Contato";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/o-que-fazemos">O Que Fazemos</Link>
            </li>
            <li>
              <Link to="/trabalhos">Trabalhos</Link>
            </li>
            <li>
              <Link to="/agencia">Agência</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/o-que-fazemos" element={<Servicos />} />
          <Route path="/trabalhos" element={<Portfolio />} />
          <Route path="/trabalhos/:id" element={<PortfolioItemPage />} /> //
          Nova rota para o portfolio item
          <Route path="/agencia" element={<Agencia />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
