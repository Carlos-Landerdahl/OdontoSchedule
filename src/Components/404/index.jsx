import { useTheme } from "../../context/ThemeContext";
import styles from "./404.module.css";

const Page404 = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`card ${isDarkMode ? 'page404' : ''}`}>
      <h1>Página não encontrada ou não autorizada</h1>
    </div>
  );
};

export default Page404;
