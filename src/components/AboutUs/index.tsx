import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import "animate.css";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const titleText = "Unity Comunicação - Publicidade sem complicação";
    let position = 0;

    const animateTitle = () => {
      document.title =
        titleText.substring(position) + " " + titleText.substring(0, position);
      position = (position + 1) % titleText.length;
    };

    const intervalId = setInterval(animateTitle, 200); // Define a velocidade da animação

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about-us" className={styles.aboutSection}>
      <div className={styles.content}>
        <h1>
          CAMPANHAS <br />
          PUBLICITÁRIAS <br />
          QUE GERAM IMPACTO
        </h1>
        <p>TRANSFORMAMOS IDEIAS EM RESULTADOS.</p>
        <a
          href="#sobre-nos"
          className={`${styles.aboutLink} ${
            isHovered ? "animate__animated animate__pulse" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          QUEM SOMOS &gt;
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
