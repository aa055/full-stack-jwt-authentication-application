import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}




// // protected route component
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { useEffect } from 'react';
// import { useRefreshToken } from '../hooks/useRefreshToken';
// import { useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAxiosPrivate } from '../hooks/useAxiosPrivate';
// import { useLogout } from '../hooks/useLogout';
// import { useRefresh } from '../hooks/useRefresh';
// import { useAccess } from '../hooks/useAccess';
// import { useRefreshAccess } from '../hooks/useRefreshAccess';


// export default function ProtectedRoute({ children }) {
//     const { auth } = useAuth();
//     const refresh = useRefresh();
//     const refreshAccess = useRefreshAccess();
//     const logout = useLogout();
//     const axiosPrivate = useAxiosPrivate();
//     const location = useLocation();
//     const navigate = useNavigate();
    
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         const verifyToken = async () => {
//         try {
//             await refreshAccess();
//             setLoading(false);
//         } catch (err) {
//             console.error(err);
//             logout();
//             setLoading(false);
//         }
//         };
    
//         if (!auth?.accessToken) {
//         verifyToken();
//         } else {
//         setLoading(false);
//         }
//     }, [auth, refreshAccess, logout]);
    
//     if (loading) {
//         return <div>Loading...</div>;
//     }
    
//     return auth?.accessToken ? children : <Navigate to="/login" state={{ from: location }} />;
//     }

