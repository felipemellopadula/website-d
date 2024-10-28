import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuItemClick = (path: string) => {
    closeMenu();
    navigate(path);
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
            { label: "O QUE FAZEMOS", path: "/servicos" },
            { label: "TRABALHOS", path: "/portfolio" },
            { label: "AGÊNCIA", path: "/agencia" },
            { label: "CONTATO", path: "/contato" },
          ].map((item, index) => (
            <li
              key={index}
              className={`${isOpen ? styles.openMenuItem : ""}`}
              onClick={() => handleMenuItemClick(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
