import { Navigate, Outlet } from 'react-router-dom';
  
export default function ProtectedRoute({ user}){
    if (!user.loggedIn) 
    {
      return <Navigate to={'/login'} replace />;
    }
    return <Outlet />;
};