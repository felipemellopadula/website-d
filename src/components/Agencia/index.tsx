import styles from "./Agencia.module.scss";
import agenciaImg from "../../assets/who03.jpg";
import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import videoBg from "../../assets/Comercial_ Site_ institucional_trilha_E.mp4";

export const Agencia: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="Agencia" className={styles.mainContainer}>
      <div className={styles.containerFlex}>
        <div className={styles.video} onClick={toggleAudio}>
          <video ref={videoRef} src={videoBg} autoPlay loop muted></video>
          <div className={styles.audioIcon} onClick={toggleAudio}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.item1}>
            <img src={agenciaImg} alt="Imagem Agência" />
          </div>
          <div className={styles.textBox}>
            <h3>NOSSA AGÊNCIA</h3>
            <br />
            <h4>Há 31 anos, uma ideia que deu certo.</h4>
            <br />
            <p>
              Ao longo de mais de três décadas, o mundo mudou de maneira
              impensável...
            </p>
            <br />
            <p>
              Mas o que realmente nos diferencia é a nossa paixão pelas
              ideias...
            </p>
            <br />
            <span>SEJA QUAL FOR O DESAFIO, TEMOS A IDEIA CERTA.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
