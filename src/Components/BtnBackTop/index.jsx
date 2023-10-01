import {useTheme} from "../../context/ThemeContext"
import styles from './btnBackTop.module.css'

export const BtnBackTop = () => {
    const {isDarkMode} = useTheme();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <button className={
                    `btn ${
                        isDarkMode ? "btn-light" : "dark"
                    } ${
                        styles.top
                    }`
                }
                onClick={scrollToTop}>
                Voltar para o topo
            </button>
        </div>
    )
}
