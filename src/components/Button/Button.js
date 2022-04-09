import React from 'react';
import './Button.css';

const Button = ({text,children,className}) => {
    return (

        <button className={className}>
            <span>{text}</span>
                <span>{children}</span>
        </button>

    );
};

export default Button;