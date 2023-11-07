import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(authContext)
    if(user){
        return children
    }else{
        return <Navigate to="/login" replace={true} state={{from:location}}/>
    }
 
   
};

export default PrivateRoute;