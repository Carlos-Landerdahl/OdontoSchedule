import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from "../../context/ThemeContext";
import { api } from "../../services/api";
import styles from "./Form.module.css";
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    authentication: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function handleChangeForm(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    if (name === "username") {
      if (value.length < 4) {
        setErrors({
          ...errors,
          username: "Nome deve ter pelo menos 4 caracteres.",
        });
      } else {
        setErrors({
          ...errors,
          username: "",
        });
      }
    }

    if (name === "password") {
      if (value.length < 4) {
        setErrors({
          ...errors,
          password: "Senha deve ter pelo menos 4 caracteres.",
        });
      } else {
        setErrors({
          ...errors,
          password: "",
        });
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formData.username.length < 4 || formData.password.length < 4) {
      setErrors({
        username: "Nome de usuário deve ter pelo menos 4 caracteres.",
        password: "Senha deve ter pelo menos 4 caracteres.",
        authentication: "",
      });
      return;
    }

    try {
      const response = await api.post("/auth", formData)
      const token = response.data.token

      Toast.fire({
        icon: 'success',
        title: 'Login feito com sucesso'
      })
      login(token)
      navigate('/home')
    } catch (error) {
      setErrors({
        ...errors,
        authentication: "Email ou senha incorretos.",
      });
      console.log("Erro na solicitação: ", error);
    }
  };

  return (
    <section className={styles.container}>
      <div
        className={`text-center card container ${isDarkMode ? 'dark' : "lightMode"
          } ${styles.card}`}
      >
        <div className="card-body">
          <form onSubmit={handleSubmit} className="d-flex gap-3">
            <div className="text-start">
              <label for="username">Nome:</label>
              <input
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Nome do usuário"
                type="text"
                name="username"
                id="username"
                required
                value={formData.username}
                onChange={handleChangeForm}
              />
              {errors.username && <div className="text-bg-danger rounded-2 p-1 mt-1 opacity-75">{errors.username}</div>}
            </div>
            <div className="text-start">
              <label for="password" className="text-start">Senha:</label>
              <input
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Senha do usuário"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChangeForm}
              />
              {errors.password && <div className="text-bg-danger rounded-2 p-1 mt-1 opacity-75">{errors.password}</div>}
            </div>
            <div className="text-start mt-1 mb-1">
              {errors.authentication && <div className="text-bg-danger rounded-2 p-1 mt-1 opacity-75">{errors.authentication}</div>}
            </div>
            <button type="submit" className={`btn btn-primary ${isDarkMode ? "darkButton" : "buttonLight"}`}>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
