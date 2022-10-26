import { Navigate, Outlet } from 'react-router-dom';
  
export default function ProtectedRoute({ user}){
    if (!user.loggedIn) 
    {
      // store the path user was trying to access
      localStorage.setItem('redirect', window.location.pathname);
      return <Navigate to={'/login'} replace />;
    }
    return <Outlet />;
};