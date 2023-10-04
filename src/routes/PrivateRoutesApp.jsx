import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/404');
    return null;
  }

  return children;
}
