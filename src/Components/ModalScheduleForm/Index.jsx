import React from "react";
import ScheduleForm from "../ScheduleForm/Index";
import {useTheme} from "../../context/ThemeContext";

const ScheduleFormModal = () => {
    const {isDarkMode} = useTheme();

    return (
        <div className={
                `modal fade ${
                    isDarkMode ? "DarkModal" : ""
                }`
            }
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div>
                    <div className={
                        `${
                            isDarkMode ? 'dark' : ""
                        }`
                    }>
                        <button type="button"
                            className={`btn-close`}
                            data-bs-dismiss="modal"
                            aria-label="Close">X</button>
                        <ScheduleForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleFormModal;
