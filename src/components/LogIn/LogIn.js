import React from 'react';
import Illustratuion from "../SignUp/Illustration/Illustratuion";
import TextInput from "../SignUp/Form/TextInput/TextInput";
import Button from "../Button/Button";
import './LogIn.css';
import Form from "../SignUp/Form/Form";
import {Link} from "react-router-dom";
import LoginForm from "./LogInForm/LoginForm";
const LogIn = () => {

    return (
        <div className="signup">
            <div className="container">
        <div className="column">
            <Illustratuion></Illustratuion>
           <LoginForm></LoginForm>
        </div>
            </div>
        </div>
    );
};

export default LogIn;