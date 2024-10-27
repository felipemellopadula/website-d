import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styles from "./styles.module.scss";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (path: string) => {
    closeMenu();
    const element = document.getElementById(path.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            { label: "HOME", path: "#main" },
            { label: "O QUE FAZEMOS", path: "#servicos" },
            { label: "TRABALHOS", path: "#portfolio" },
            { label: "AGÊNCIA", path: "#agencia" },
            { label: "CONTATO", path: "#contato" },
          ].map((item, index) => (
            <li
              key={index}
              className={`${isOpen ? styles.openMenuItem : ""}`}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <ScrollLink to={item.path.slice(1)} smooth>
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
