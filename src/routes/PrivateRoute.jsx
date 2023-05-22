import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../pages/Shared/Loader/Loader';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }
    
    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login"></Navigate>
};

export default PrivateRoute;