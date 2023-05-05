import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        <LoadSpinner />
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/user/login"></Navigate>
};

export default PrivateRoutes;