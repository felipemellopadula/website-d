// components/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Main } from "../Main";
import { Servicos } from "../Servicos";
import { Portfolio } from "../Portfolio";
import { Agencia } from "../Agencia";
import { Contato } from "../Contato";

export const SinglePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Adiciona um pequeno atraso para garantir que o elemento exista no DOM
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Rola para o topo se não houver hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Main />
      <div id="servicos">
        <Servicos />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="agencia">
        <Agencia />
      </div>
      <div id="contato">
        <Contato />
      </div>
    </>
  );
};
