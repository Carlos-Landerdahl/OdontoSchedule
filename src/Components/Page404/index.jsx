import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Page404.module.css";

const Page404 = () => {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  return (
    <>
      <section
        className={`${
          styles.containerContent
        } card col-sm-12 col-lg-6 container ${
          isDarkMode ? "dark" : "light-mode"
        }`}
      >
        <div
          className={`${styles.wrapperContent} card-body row ${
            isDarkMode ? "dark" : "lightMode"
          }`}
        >
          <div className={`${styles.wrapperText404} d-flex flex-column text-center`}>
            <h1>404</h1>
            <h2 className="text-danger">OPPS! PÁGINA NÃO ENCONTRADA</h2>
            <p>Desculpe, a página que você está tentando acessar não existe</p>
          </div>
          <div className="text-center">
            <button 
            className={`btn btn-primary ${styles.sizeBtn}`}
            onClick={() => navigate(-1)}
            >
              Retornar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
