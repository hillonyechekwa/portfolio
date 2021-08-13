import React from 'react';
import '../styles/button.scss'
import { Link } from 'gatsby'

const Button = ({ name, type, dest }) => {
    return (
        <button className={type}>
            <Link to={dest}>
                {name}
            </Link>
        </button>
    )
}


export default Button


