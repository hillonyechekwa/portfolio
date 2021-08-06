import React from 'react';
import {Link} from 'gatsby'


const Nav = () => {
    return (
        <nav>
            <div className="top-nav">
                <Link to="#">Resume</Link>
                <Link to="">Blog</Link>
                {/* <Link to=""></Link> */}
            </div>
            <div className="bottom-nav">
                <Link to="">Projects</Link>
                <Link to="">Writing</Link>
                <Link to="">Uses</Link>
                <Link to="">Contact</Link>
            </div>
        </nav>
    )
}

export default Nav