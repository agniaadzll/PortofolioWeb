import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="/images/logo.svg" alt="logo"/>
                        </div>
                    </ul>
                    <ul className="navbar__right">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                        <li><Link to="/ContactPage">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    )
}

export default Nav;
