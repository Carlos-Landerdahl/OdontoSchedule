import React, { useEffect, useState } from "react";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { ScheduleFormModal } from "../ScheduleFormModal";
import { api } from "../../services/api";
import { format } from "date-fns";

const DetailCard = () => {
  const [destistaDetails, setDentistaDetails] = useState([]);
  const [consultasDentista, setConsultasDentista] = useState([]);

  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const { nome, sobrenome, usuario } = destistaDetails;

  useEffect(() => {
    api
      .get(`/dentista?matricula=aae48786-d34d-481a-8722-bea180b9b004`)
      .then((response) => {
        setDentistaDetails(response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer o fetch de detalhes", error);
      });

    api
      .get(`/consulta?dentistaMatricula=${id}`)
      .then((response) => {
        console.log(response);
        setConsultasDentista(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar consultas do dentista", error);
      });
  }, [id]);

  return (
    <div>
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
              <li className="list-group-item d-flex gap-1 mt-2">
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
                className={`btn btn-primary ${
                  isDarkMode ? "darkButton" : "buttonLight"
                }`}
                type="submit"
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
        <ScheduleFormModal />
      </section>
      <section className={`${styles.wrapperAppointment}`}>
        <h2 className="text-center">Consultas do Dentista</h2>
        <div className="d-flex justify-content-center">
          <ul className={`list-group ${styles.slideAppointment}`}>
            {consultasDentista.map((consulta) => (
              <li key={consulta.id} className={`list-group-item ${isDarkMode ? "dark" : "lightMode"}`}>
                <b>Data:</b>{" "}
                {format(
                  new Date(consulta.dataHoraAgendamento),
                  "dd/MM/yyyy HH:mm:ss",
                  { timeZone: "America/Sao_Paulo" }
                )}
                <br />
                <b>Paciente:</b> {consulta.paciente.nome}{" "}
                {consulta.paciente.sobrenome}
                <br />
                <b>Dentista:</b> {consulta.dentista.nome}{" "}
                {consulta.dentista.nome}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DetailCard;
