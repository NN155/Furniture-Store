import React from 'react';
export const Button = ({ children, isFilled, className = '', ...rest }) => {
    const buttonStyle = isFilled ? 'btn-filled' : 'btn-transparent';
    return (
        <button className={`btn-default ${buttonStyle} ${className}`} {...rest}>
            {children}
        </button>
    );
};

