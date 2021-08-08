import React from 'react';
import Nav from '../nav';
import Footer from '../footer'
import "../../styles/layout.scss"


const Layout = ({ children }) => {
    return (
        <div className="main-background">
            <Nav />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}


export default Layout

