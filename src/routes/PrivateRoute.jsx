import React from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
    const {user} = useAuth();
  return user ? children : <Navigate to="/login" />
}

export default PrivateRoute