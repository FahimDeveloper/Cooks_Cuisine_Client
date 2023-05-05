import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1 className='text-2xl font-bold'>Loading...</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/user/login"></Navigate>
};

export default PrivateRoutes;