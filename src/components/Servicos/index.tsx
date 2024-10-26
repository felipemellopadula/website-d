import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Servicos = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const items = [
    {
      id: 3,
      title: "SOCIAL MEDIA",
      videoSrc: "/videos/social_media.mp4",
      description:
        "Amplifique a voz da sua marca e envolva seu público como nunca antes. Nossas estratégias de mídias sociais são projetadas para impulsionar sua presença online e fomentar conexões significativas.",
    },
    {
      id: 4,
      title: "GESTÃO DE TRÁFEGO",
      videoSrc: "/videos/gestao_trafego.mp4",
      description:
        "Direcione tráfego de qualidade para seu site e converta visitantes em clientes fiéis. Nossa gestão de tráfego especializada garante que você alcance o público certo na hora certa.",
    },
    {
      id: 5,
      title: "TIME DE CRIATIVOS",
      videoSrc: "/videos/time_criativos.mp4",
      description:
        "Liberte o poder da criatividade. Nosso time de inovadores cria conteúdos envolventes que cativam e inspiram, destacando sua marca da concorrência.",
    },
    {
      id: 6,
      title: "WEB DESIGN - LANDING PAGES",
      videoSrc: "/videos/web_design.mp4",
      description:
        "A primeira impressão é a que fica. Nós projetamos landing pages impressionantes que não apenas têm ótima aparência, mas também convertem, proporcionando experiências excepcionais aos usuários.",
    },
    {
      id: 7,
      title: "FILMES PARA MÍDIAS DIGITAIS E TV",
      videoSrc: "/videos/filmes_midias_digitais.mp4",
      description:
        "Conte sua história de forma visual. Produzimos filmes impactantes para mídias digitais e TV que envolvem o público e dão vida à narrativa da sua marca.",
    },
    {
      id: 8,
      title: "PEÇAS PUBLICITÁRIAS",
      videoSrc: "/videos/pecas_publicitarias.mp4",
      description:
        "Seja notado com materiais publicitários atraentes. Do conceito à criação, entregamos anúncios impactantes que ressoam com seu mercado-alvo.",
    },
    {
      id: 9,
      title: "LOJA ONLINE",
      videoSrc: "/videos/loja_online.mp4",
      description:
        "Expanda seu negócio com uma poderosa loja online. Construímos soluções de e-commerce que são amigáveis, seguras e otimizadas para vendas.",
    },
    {
      id: 10,
      title: "COPY E REDAÇÃO",
      videoSrc: "/videos/copy_redacao.mp4",
      description:
        "Palavras que funcionam. Nossos serviços de copywriting e redação criam mensagens que conectam com seu público e impulsionam ações.",
    },
  ];

  return (
    <section id="Servicos" className={styles.aboutSection}>
      <div className={styles.item1}></div>
      <div className={styles.item2}>
        <h3>
          SOMOS UMA AGÊNCIA DE COMUNICAÇÃO QUE ACREDITA NO PODER DAS IDEIAS.
        </h3>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles[`item${item.id}`]}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() =>
            setHoveredItem(hoveredItem === item.id ? null : item.id)
          }
        >
          <h3>{item.title}</h3>
          {hoveredItem === item.id && (
            <div
              className={styles.expandedContent}
              onClick={(e) => e.stopPropagation()}
            >
              <p>{item.description}</p>
              <div className={styles.videoContainer}>
                <button
                  className={styles.closeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredItem(null);
                  }}
                  aria-label="Fechar vídeo"
                >
                  &times;
                </button>
                <video src={item.videoSrc} autoPlay loop muted playsInline />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
