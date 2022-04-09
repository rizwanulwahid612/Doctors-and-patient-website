import React from 'react';
import './CheckBox.css';


const CheckBox = ({text,className,...rest}) => {
    return (
        <label className={className}>
            <input {...rest} type="checkbox" />
            <span> {text} </span>
        </label>

    );
};

export default CheckBox;