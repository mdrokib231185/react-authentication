import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';

const RequireAuth = ({ children }) => {
      const navigate = useNavigate()
      const location = useLocation()
      const [user, loading, error] = useAuthState(auth);

      if (!user) {
            return <Navigate to="/login" state={{from: location}}></Navigate>
      }
      return children
};

export default RequireAuth;