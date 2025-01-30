import React from 'react';
import './Button.css';

function Button({ onClick, text }) {
    return (
        <button className="joke-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;