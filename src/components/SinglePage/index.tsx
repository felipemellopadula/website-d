import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Main } from "../Main";
import { Servicos } from "../Servicos";
import { Portfolio } from "../Portfolio";
import { Agencia } from "../Agencia";
import { Contato } from "../Contato";

type SinglePageProps = {
  section?: string;
};

export const SinglePage: React.FC<SinglePageProps> = ({ section }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        // Adiciona um pequeno atraso para garantir que o elemento exista no DOM
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Se o elemento não for encontrado, redireciona para a página inicial
        navigate("/");
      }
    } else {
      // Rola para o topo se não houver seção especificada
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section, navigate]);

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
