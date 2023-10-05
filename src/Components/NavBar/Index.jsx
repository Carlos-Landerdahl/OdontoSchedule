import React from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${isDarkMode ? "navbar-dark dark" : "navbar-light lightMode"
          }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            Odonto schedule
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              {isAuthenticated ? (
                <>
                  <li className={`nav-item ${styles.navBarLink}`}>
                    <button
                      onClick={handleLogout}
                      className={`nav-link ${isDarkMode ? "darkLink" : ""}`}
                    >
                      Logout
                    </button>
                  </li>
                  <li className={`nav-item ${styles.navBarLink}`}>
                    <a
                      className={`nav-link ${isDarkMode ? "darkLink" : ""}`}
                      href="/home"
                    >
                      Home
                    </a>
                  </li>
                </>
              ) : (
                <li className={`nav-item ${styles.navBarLink}`}>
                  <a
                    className={`nav-link ${isDarkMode ? "darkLink" : ""}`}
                    href="/"
                  >
                    Login
                  </a>
                </li>
              )}
              <li className={`nav-item`}>
                <button
                  className={`btn ${isDarkMode ? "btn-light" : "btn-dark"
                    } ${styles.btnStyle}`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? "☀" : "🌙"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
