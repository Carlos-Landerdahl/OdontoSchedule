import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Card = ({ dentista }) => {
  const { matricula, nome, sobrenome } = dentista;
  const { isDarkMode } = useTheme();

  return (
    <div className={`card ${isDarkMode ? 'dark' : ''}`}>
      <img
        className="card-img-top"
        src="/images/doctor.jpg"
        alt={`${nome} ${sobrenome}`}
      />
      <div className={`card-body ${styles.CardBody}`}>
        <Link to={`/dentista/${matricula}`}>
          <h5 className={`card-title ${styles.title}`}>
            {nome} {sobrenome}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
