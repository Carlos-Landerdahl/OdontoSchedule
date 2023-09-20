import styles from "./Card.module.css";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const { detail } = useParams();

  console.log(detail);
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to="/dentista">
            <h5 className={`card-title ${styles.title}`}>
              Nome e Sobrenome do dentista
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
