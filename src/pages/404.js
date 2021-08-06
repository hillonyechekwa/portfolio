import React from 'react';
import {Link} from 'gatsby'

const NotFound = () => {
    return (
        <h2>
            This page you were looking for does not exist. Click <Link to="/">here</Link> to go back to the home page
        </h2>
    )
}


export default NotFound;