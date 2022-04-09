import React from 'react';
import './TextInput.css';
import CheckBox from "../../../CheckBox/CheckBox";
const TextInput = ({icon,...rest}) => {
    return (
        <div>
            <div className="textInput">
                <input {...rest}/>
                <span className="material-icons-outlined"> {icon}</span>
            </div>




        </div>
    );
};

export default TextInput;