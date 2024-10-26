import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu} className={styles.menuIcon}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
        <button onClick={closeMenu} className={styles.closeButton}>
          <FaTimes />
        </button>
        <ul>
          {[
            { label: "HOME", path: "/" },
            { label: "O QUE FAZEMOS", path: "/o-que-fazemos" },
            { label: "TRABALHOS", path: "/trabalhos" },
            { label: "AGÊNCIA", path: "/agencia" },
            { label: "CONTATO", path: "/contato" },
          ].map((item, index) => (
            <li
              key={index}
              className={`${isOpen ? styles.openMenuItem : ""}`}
              onClick={closeMenu}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
