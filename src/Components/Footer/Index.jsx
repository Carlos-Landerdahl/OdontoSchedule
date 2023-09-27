import React from "react";
import styles from "./Footer.module.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button
          className={`btn ${isDarkMode ? "btn-light" : "btn-dark"} ${styles.top
            }`}
          onClick={scrollToTop}
        >
          Voltar para o topo
        </button>
        <div
          className={`navbar ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
            } ${styles.footer}`}
        >
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                <img
                  className={`${styles.dhLogo}`}
                  src="/images/DH.png"
                  alt="DH-logo"
                />
              </div>
              <div className={`col-sm-12 col-lg-6 ${styles.icons}`}>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
