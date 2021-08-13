import React from 'react';
import '../styles/card.scss'
import Button from './button'


const Card = ({title, desc, addclass}) => {
    return (
        <div className={`card ${addclass}`}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <Button type="text-btn" name="go to post" dest="./projects/post" />
        </div>
    )
}

export default Card