import styles from "./Agencia.module.scss";
import agenciaImg from "../../assets/who03.jpg";
import { useEffect } from "react";

export const Agencia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <section id="Agencia" className={styles.mainContainer}>
      <div className={styles.containerFlex}>
        <div className={styles.imgContainer}>
          <img src={agenciaImg} alt="Foto do escritorio da agência" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.textBox}>
            <h3>NOSSA AGÊNCIA</h3>
            <br />
            <h4>Há 31 anos, uma ideia que deu certo.</h4>
            <br />
            <p>
              Ao longo de mais de três décadas, o mundo mudou de maneira
              impensável. Tecnologias emergiram, mercados se transformaram e
              comportamentos se adaptaram. No entanto, uma coisa permaneceu
              constante: a ideia. Aquele momento de insight, de criatividade e
              de inovação que pode mudar tudo. Nossa agência nasceu há 31 anos
              com um propósito claro: criar ideias que transformam. E essa
              missão continua: comunicação, campanhas publicitárias,
              digitais...E estamos mais na ativa do que nunca. Com uma equipe de
              criativos e estrategistas apaixonados, trabalhamos para criar
              soluções inovadoras que respondam às necessidades de nossos
              clientes.
            </p>
            <br />
            <p>
              Mas o que realmente nos diferencia é a nossa paixão pelas ideias.
              Ideias que geram resultado, que movem pessoas e que transformam
              mercados. Ideias que são o resultado de uma profunda compreensão
              do negócio, do público e do mercado. Hoje, somos uma agência que
              está preparada para enfrentar os desafios do futuro. Com uma
              equipe experiente e inovadora, estamos prontos para criar ideias
              que façam a diferença. Ideias que transformem o seu negócio e o
              seu futuro.
            </p>
            <br />
            <span>SEJA QUAL FOR O DESAFIO, TEMOS A IDEIA CERTA.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
