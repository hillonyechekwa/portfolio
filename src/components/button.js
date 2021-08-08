import React from 'react';
import '../styles/button.scss'

const Button = ({ name, type }) => {
    return (
        <button className={type}>
            {name}
        </button>
    )
}


export default Button