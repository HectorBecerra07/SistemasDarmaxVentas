import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children, roles }) => {
    const { isAuthenticated, user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        // You can render a loading spinner here while checking auth state
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        //- Redirect them to the /login page, but save the current location they were
        //- trying to go to. This allows us to send them along to that page after a
        //- successful login.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    //- If roles are provided, check if the user has one of the required roles
    if (roles && !roles.includes(user.role)) {
        //- User is authenticated but does not have the required role
        //- Redirect to a 'not-authorized' page or simply back to home
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
