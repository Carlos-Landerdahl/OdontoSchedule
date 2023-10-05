import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
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

  useEffect(() => {
    const token = localStorage.getItem("odonto-token");

    if (token !== null) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false)
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('odonto-token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Sua conta será desconectada!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sair',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: 'error',
          title: 'Logout feito com sucesso'
        })
        localStorage.removeItem('odonto-token');
        setIsAuthenticated(false); 
        navigate('/');
      }
    })
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
