import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando o ícone FaTimes para fechar o menu
import styles from "./styles.module.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu} className={styles.menuIcon}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
        <button onClick={toggleMenu} className={styles.closeButton}>
          <FaTimes />
        </button>
        <ul>
          <li>HOME</li>
          <li>QUEM SOMOS</li>
          <li>TRABALHOS</li>
          <li>CONTATO</li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
