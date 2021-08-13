import React from 'react';
// import Nav from '../nav';
import Footer from '../footer'
import "../../styles/layout.scss"


const Layout = ({ children }) => {
    return (
        <div className="main-background">
            <div className="main-wrapper">
                {/* <Nav /> */}
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}


export default Layout

