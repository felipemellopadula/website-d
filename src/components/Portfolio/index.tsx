import styles from "./styles.module.scss";
import imgItem1 from "../../assets/peca-carro01.jpg";
import imgItem2 from "../../assets/sierra1.jpg";
import imgItem3 from "../../assets/amazonia.jpg";
import imgItem4 from "../../assets/markela.jpg";
import imgItem5 from "../../assets/lustres.jpg";
import imgItem6 from "../../assets/amawater.jpg";
import imgItem7 from "../../assets/talkgolf.jpg";
import imgItem8 from "../../assets/prado-chaves.jpg";
import imgItem9 from "../../assets/artek.jpg";
import imgItem10 from "../../assets/renault.jpg";
import imgItem11 from "../../assets/center-fabril.jpg";
import imgItem12 from "../../assets/real-green.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface PortfolioItem {
  id: string;
  gridArea: string;
  category: string;
  title: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "item1",
    gridArea: "item1",
    category: "MÍDIAS DIGITAIS E OFFLINE",
    title: "AULAS DE GOLFE COM FPG GOLFCENTER",
    imageUrl: imgItem1,
  },
  {
    id: "item2",
    gridArea: "item2",
    category: "MÍDIA DIGITAIS",
    title: "FRETES AÉREOS COM SIERRA MIKE",
    imageUrl: imgItem2,
  },
  {
    id: "item3",
    gridArea: "item3",
    category: "3D - OUT OF HOME",
    title: "DO BRASIL PARA O MUNDO COM AMAZÔNIA",
    imageUrl: imgItem3,
  },
  {
    id: "item4",
    gridArea: "item4",
    category: "ILUSTRAÇÃO 3D",
    title: "LINHA DE PRODUTOS COM MARKELA COSMÉTICOS",
    imageUrl: imgItem4,
  },
  {
    id: "item5",
    gridArea: "item5",
    category: "TV E MÍDIA OFFLINE",
    title: "TUDO PARA O SEU PROJETO COM LUSTRES YAMAMURA",
    imageUrl: imgItem5,
  },
  {
    id: "item6",
    gridArea: "item6",
    category: "MÍDIAS DIGITAIS",
    title: "CRUZEIROS PELO RIO DANÚBIO COM AMA WATER WAYS",
    imageUrl: imgItem6,
  },
  {
    id: "item7",
    gridArea: "item7",
    category: "MÍDIAS DIGITAIS",
    title: "VINHETAS PARA PODCAST COM TALK GOLF SHOW",
    imageUrl: imgItem7,
  },
  {
    id: "item8",
    gridArea: "item8",
    category: "MÍDIAS ONLINE E OFFLINE",
    title: "QUANDO E ONDE PRECISAR COM PRADO CHAVES",
    imageUrl: imgItem8,
  },
  {
    id: "item9",
    gridArea: "item9",
    category: "MÍDIA OFFLINE",
    title: "NOVOS CATÁLOGOS COM ARTEK",
    imageUrl: imgItem9,
  },
  {
    id: "item10",
    gridArea: "item10",
    category: "PDV - MÍDIA OFFLINE",
    title: "VERÃO DE NORTE A SUL COM RENAULT",
    imageUrl: imgItem10,
  },
  {
    id: "item11",
    gridArea: "item11",
    category: "MÍDIA OFFLINE",
    title: "OS FIOS QUE TECEM SUA VIDA COM CENTER FABRIL",
    imageUrl: imgItem11,
  },
  {
    id: "item12",
    gridArea: "item12",
    category: "MÍDIAS DIGITAIS",
    title: "CARRINHOS DE GOLFE NO BRASIL COM REAL GREEN E TORO",
    imageUrl: imgItem12,
  },
];

export const Portfolio = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemId: string) => {
    navigate(`/portfolio/${itemId}`);
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div id="Portfolio" className={styles.container}>
      {portfolioItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.portfolioItem} ${styles[item.gridArea]}`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          onClick={() => handleItemClick(item.id)}
        >
          <div className={styles.content}>
            <div className={styles.category}>{item.category}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
