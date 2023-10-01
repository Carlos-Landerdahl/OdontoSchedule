import React, { useEffect } from "react";
import styles from "./ScheduleForm.module.css";
import { useTheme } from "../../context/ThemeContext"; // Importe o contexto de tema

const ScheduleForm = () => {
  const { isDarkMode } = useTheme(); // Usar o estado de modo escuro do contexto

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      <div
        className={`text-center container ${isDarkMode ? 'dark': ""}`}
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                <option key={'Matricula do dentista'} value={'Matricula do dentista'}>
                  {`Nome Sobrenome`}
                </option>
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select className="form-select" name="patient" id="patient">
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                <option key={'Matricula do paciente'} value={'Matricula do paciente'}>
                  {`Nome Sobrenome`}
                </option>
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Data
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={`btn ${isDarkMode ? "btn-light" : "dark"}`}
              type="submit"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
