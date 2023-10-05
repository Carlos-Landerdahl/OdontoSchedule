import { useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import { useTheme } from "../../context/ThemeContext";
import { api } from "../../services/api";
import Swal from "sweetalert2";

export const ScheduleForm = () => {
  const { isDarkMode } = useTheme();
  const [dentista, setDentista] = useState([]);
  const [paciente, setPaciente] = useState([]);
  const [dataConsulta, setDataConsulta] = useState("");
  const [selectedDentistaMatricula, setSelectedDentistaMatricula] = useState(null);
  const [selectedPacienteMatricula, setSelectedPacienteMatricula] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/dentista`)
      .then((response) => {
        setDentista(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados: ", error);
      });

    api
      .get(`/paciente`)
      .then((response) => {
        setPaciente(response.data.body);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados: ", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedDentistaMatricula === null || selectedPacienteMatricula === null) {
      alert("Selecione um dentista e um paciente.");
      return;
    }

    const selectedDentista = dentista.find((d) => d.matricula === selectedDentistaMatricula);
    const selectedPaciente = paciente.find((p) => p.matricula === selectedPacienteMatricula);

    if (!selectedDentista || !selectedPaciente) {
      alert("Dentista ou paciente não encontrados.");
      return;
    }

    const consulta = {
      paciente: {
        matricula: selectedPacienteMatricula,
      },
      dentista: {
        matricula: selectedDentistaMatricula,
      },
      dataHoraAgendamento: dataConsulta,
    };

    const token = localStorage.getItem("odonto-token")

    api
      .post("/consulta", consulta, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Consulta agendada com sucesso',
            showConfirmButton: false,
            timer: 3000
          })
          setDataConsulta("");
          setSelectedDentistaMatricula(null);
          setSelectedPacienteMatricula(null);
          setError(null);
        }
      })
      .catch((error) => {
        setError("Ocorreu um erro ao agendar a consulta. Tente novamente mais tarde.");
      });
  };

  return (
    <>
      <div className={`text-center container}`}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                value={selectedDentistaMatricula || ""}
                onChange={(e) => setSelectedDentistaMatricula(e.target.value)}
              >
                <option value="">Selecione um dentista</option>
                {dentista.map((dentista) => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {`${dentista.nome} ${dentista.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                value={selectedPacienteMatricula || ""}
                onChange={(e) => setSelectedPacienteMatricula(e.target.value)}
              >
                <option value="">Selecione um paciente</option>
                {paciente.length > 0 ? (
                  paciente.map((pac) => (
                    <option key={pac.matricula} value={pac.matricula}>
                      {`${pac.nome} ${pac.sobrenome}`}
                    </option>
                  ))
                ) : (
                  <option value="">Carregando pacientes...</option>
                )}
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
                value={dataConsulta}
                onChange={(e) => setDataConsulta(e.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              {error && <p className="text-danger">{error}</p>}
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <button
              className={`btn btn-primary ${isDarkMode ? "darkButton" : "buttonLight"}`}
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
