import React from 'react';
import {useAuth} from '../../Context/AuthContext'
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {

    const{user}=useAuth()

return(

    user ? children : <Navigate to="/Login" />




)
};

export default PrivateRoute;