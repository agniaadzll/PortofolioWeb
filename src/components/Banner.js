import React from 'react';
import {FaDribbble, FaBehance, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Banner = () => {
        const [state] = React.useState({title: 'I am Agnia Adzillawati', text: 'As UI/UX Enthusiast and Graphic Design with long time \
        experience in this field', Image: '/images/ava.svg'});
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaDribbble className="headerIcon"/>
                                    </li>
                                    <li>
                                        <FaBehance className="headerIcon"/>
                                    </li>
                                    <li>
                                        <FaInstagram className="headerIcon"/>
                                    </li>
                                    <li>
                                        <FaLinkedinIn className="headerIcon"/>
                                    </li>
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header__buttons">
                                    <a href="" className="btn1 btn-smart">
                                        Hire Me
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="" className="btn2 btn-outline headerBtn">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={state.Image} alt="ava" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;
