import React, { useEffect, useState } from "react";
import ScheduleFormModal from "../ModalScheduleForm/Index";
import styles from "./DetailCard.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const DetailCard = () => {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const [destistaDetails, setDentistaDetails] = useState([]);
  const { nome, sobrenome, usuario } = destistaDetails;

  useEffect(() => {
    axios
      .get(`https://dhodonto.ctd.academy/dentista?matricula=${id}`)
      .then((response) => {
        setDentistaDetails(response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer o fetch de detalhes", error);
      });
  }, [id]);

  return (
    <>
      <h1>Detalhes do dentista</h1>
      <section
        className={`card col-sm-12 col-lg-6 container ${isDarkMode ? styles.cardDark : ""
          }`}
      >
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {nome}</li>
              <li className="list-group-item">Sobrenome: {sobrenome}</li>
              <li className="list-group-item">Usuário: {usuario?.username}</li>
            </ul>
            <div className="text-center">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn ${isDarkMode ? "btn-light" : "btn-dark"} ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
