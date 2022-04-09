import React, {useState} from 'react';
import './SignUp.css';
import Illustratuion from "./Illustration/Illustratuion";
import SignUpFrom from "../SignUpFrom/SignUpFrom";

const SignUp = () => {



    return (
        <div className="signup">
            <div className="container">
                <h1>Create an account</h1>
                <div className="column">
                <Illustratuion></Illustratuion>
                   <SignUpFrom></SignUpFrom>
                </div>

            </div>
        </div>
    );
};

export default SignUp;