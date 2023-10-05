import React from "react";
import styles from "./Footer.module.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <nav
          className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark dark" : "navbar-light lightMode"
            } ${styles.footer}`}
        >
          <div className="container">
            <div className={`row align-items-center ${isDarkMode ? styles.iconsDark : ""}`}>
              <div className={`col-lg-6 d-flex m-auto ${styles.icons}`}>
                <img
                  className={`${styles.dhLogo}`}
                  src="/images/DH.png"
                  alt="DH-logo"
                />
                <img
                  src="/images/ico-facebook.png"
                  alt="ícone do facebook"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-instagram.png"
                  alt="ícone do instagram"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-whatsapp.png"
                  alt="ícone do whatsapp"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-tiktok.png"
                  alt="ícone do tiktok"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
