import React from 'react';
import { Link } from 'gatsby'
import "../styles/nav.scss"


const Nav = () => {
    return (
        <nav>
            <div className="top-nav">
                <Link to="#" activeClassName="">Resume</Link>
                <Link to="#" activeClassName="">Blog</Link>
                {/* <Link to=""></Link> */}
            </div>
            <div className="bottom-nav">
                <Link to="" activeClassName="">Projects</Link>
                <Link to="" activeClassName="">Writing</Link>
                <Link to=""activeClassName="">Uses</Link>
                <Link to=""activeClassName="">Contact</Link>
            </div>
        </nav>
    )
}

export default Nav