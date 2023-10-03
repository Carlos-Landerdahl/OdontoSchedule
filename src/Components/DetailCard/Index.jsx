import React, { useEffect, useState } from "react";
import styles from "./DetailCard.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ScheduleFormModal } from "../ScheduleFormModal";

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
        className={`card col-sm-12 col-lg-6 container ${
          isDarkMode ? "dark" : "light-mode"
        }`}
      >
        <div className={`card-body row ${isDarkMode ? "dark" : "lightMode"}`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group d-flex gap-1">
              <li className="list-group-item d-flex gap-1">
                <b>Nome:</b>
                {nome}
              </li>
              <li className="list-group-item d-flex gap-1">
                <b>Sobrenome:</b>
                {sobrenome}{" "}
              </li>
              <li className="list-group-item d-flex gap-1">
                <b>Usuário:</b>
                {usuario?.username}
              </li>
            </ul>
            <div className={`text-center ${styles.wrapperBtn}`}>
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-primary ${isDarkMode ? "darkButton" : "buttonLight"}`}
                type="submit"
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
