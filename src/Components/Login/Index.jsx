import { useTheme } from "../../context/ThemeContext";
import styles from "./Form.module.css";

const LoginForm = () => {
  const { isDarkMode } = useTheme();

  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <main>
      <div
        className={`text-center card container ${isDarkMode ? 'dark' : ""
          } ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Email"
              name="login"
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Senha"
              name="password"
              type="password"
              required
            />
            <button className="btn btn-primary" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
