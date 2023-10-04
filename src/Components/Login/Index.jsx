import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from "../../context/ThemeContext";
import { api } from "../../services/api";
import styles from "./Form.module.css";
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  function handleChangeForm(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth", formData)
      const token = response.data.token

      login(token)
      navigate('/home')
    } catch (error) {
      console.log("Erro na solicitação: ", error); 
    }
  };

  return (
    <>
      <div
        className={`text-center card container ${isDarkMode ? 'dark' : "lightMode"
          } ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nome"
              type="text"
              name="username"
              id="username"
              required
              value={formData.username}
              onChange={handleChangeForm}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Senha"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChangeForm}
            />
            <button  type="submit" className={`btn btn-primary ${isDarkMode ? "darkButton" : "buttonLight"}`}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
