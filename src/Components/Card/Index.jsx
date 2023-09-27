import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { matricula, nome, sobrenome } = dentist;

  const isDarkMode = false; // Substitua por sua lógica de verificação de modo escuro

  return (
    <div className={`card ${isDarkMode ? 'dark-mode' : ''}`}>
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
