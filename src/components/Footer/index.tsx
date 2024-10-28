import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Criação e desenvolvimento por Unity Comunicação. © Copyright 2024-2025 -
        Todos os direitos reservados.
      </p>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/profile.php?id=100054564694262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/unitycomunicacao9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};
