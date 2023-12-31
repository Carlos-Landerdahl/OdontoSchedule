import React from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

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
          <h1 className={`navbar-brand ${styles.navbarBrandMobile}`}>
            Odonto schedule
          </h1>
          <button
            className={`btn toggleDarkMode-test ${isDarkMode ? "btn-light" : "btn-dark"
              } ${styles.btnStyleMobile}`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "☀" : "🌙"}
          </button>
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
                    <Link className={`nav-link ${isDarkMode ? "darkLink" : ""}`} to="/home">
                      Home
                    </Link>
                  </li>
                  <li className={`nav-item ${styles.navBarLink}`}>
                    <button
                      onClick={handleLogout}
                      className={`nav-link ${isDarkMode ? "darkLink" : ""}`}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className={`nav-item ${styles.navBarLink}`}>
                  <Link
                    className={`nav-link ${isDarkMode ? "darkLink" : ""}`}
                    href="/"
                  >
                    Login
                  </Link>
                </li>
              )}
              <li className={`nav-item`}>
                <button
                  data-testid="toggleDarkMode"
                  className={`btn toggleDarkMode-test ${isDarkMode ? "btn-light" : "btn-dark"
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
