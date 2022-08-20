import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function ProtectedRoutes() {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default ProtectedRoutes;
