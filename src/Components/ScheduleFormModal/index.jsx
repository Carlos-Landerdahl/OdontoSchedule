import {ScheduleForm} from "../ScheduleForm";
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
                <div className={`modal-content ${isDarkMode ? "dark" : ""}`}>
                    <div className="modal-header">
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
