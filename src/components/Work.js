import React from 'react';
import {FaDribbble, FaBehance, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Contact from "./Contact";
import Copyright from './Copyright';


const Work = () => {
    const [header] = React.useState({mainHeader: "My Work", portofolio1: "UI/UX", portofolio2: "Branding"});
    return (
        <div className="work">
            <div className="container">
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="work__info">
                            <h2>
                                {header.mainHeader}
                            </h2>
                            <div className="work__info-p1">
                                Hi, I’m Agnia Adzillawati as a UI UX enthusiast from Indonesia. 
                                Currently working as a graphic design freelancer and working on 
                                several application projects in college as a UI UX. 
                            </div>
                            <ul className="work__info-icon">
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
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="work__img">
                            <img src="/images/work.svg" alt="work" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="uiux">
                <div className="container">
                    <div className="row h-650 alignCenter">
                        <div className="col-6">
                            <div className="uiux__info">
                                <h2>
                                    {header.portofolio1}
                                </h2>
                                <div className="uiux__info-p1">
                                    My design mockup ui/ux music app for better experience. 
                                </div>
                                <a href="" className="btn-view">
                                    View More
                                </a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="uiux__img">
                                <img src="/images/uiux.svg" alt="uiux" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="branding">
                <div className="container">
                    <div className="row h-650 alignCenter">
                        <div className="col-6">
                            <div className="branding__img">
                                <img src="/images/branding.svg" alt="branding" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="branding__info">
                                <h2>
                                    {header.portofolio2}
                                </h2>
                                <div className="branding__info-p1">
                                    I try to make product branding Nike shoes. 
                                </div>
                                <a href="" className="btn-view">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Copyright />
            </div>
                    
        </div>
    )
}

export default Work;
