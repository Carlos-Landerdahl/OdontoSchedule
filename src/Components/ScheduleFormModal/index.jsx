import {ScheduleForm} from "../ScheduleForm";
// import styles from "./ScheduleFormModal.css"
import {useTheme} from "../../context/ThemeContext";


export const ScheduleFormModal = () => {
    const {isDarkMode} = useTheme();

    return (
        <div className={`modal fade`}
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
                <div className={`modal-content ${isDarkMode ? "dark" : ""}`}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Selecione o dentista, paciente e a data e hora</h1>
                        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
            // está em dark mode e deverá utilizado o css correto */}
                        <button type="button"
                            className={`btn btn-close ${isDarkMode ? "closeDarkButton" : ""}`}
                            data-bs-dismiss="modal"
                            aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                        <ScheduleForm/>
                    </div>
                </div>
            </div>
        </div>

    );
};
