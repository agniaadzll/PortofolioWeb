import React from 'react';
import {FaDribbble, FaBehance, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {BsDownload} from "react-icons/bs";
import Contact from "./Contact";
import Copyright from './Copyright';

const About = () => {
    const [header] = React.useState({mainHeader: "About Me", 
    mainHeader2: "Tools & Skills", title: "My Background"});

    const [state] = React.useState([
        {
            id: 1, 
            img:'/images/figma.svg', 
            heading: "Figma"
        },
        {
            id: 2, 
            img:'/images/ps.svg', 
            heading: "Adobe Photoshop"
        },
        {
            id: 3, 
            img:'/images/id.svg', 
            heading: "Adobe InDesign"
        }
    ]);

    return (
        <div className="about">
            <div className="container">
                <div className="row h-550 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/images/profil.svg" alt="profil" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h2>
                                {header.mainHeader}
                            </h2>
                            <div className="about__info-p1">
                                Hi, I’m Agnia Adzillawati as a UI UX enthusiast from Indonesia. 
                                Currently working as a graphic design freelancer and working on 
                                several application projects in college as a UI UX. 
                            </div>
                            <div className="about__info-p2">
                                I am interested in the UI UX field because
                                I have an IT background and I like the design process 
                                from problem solving to the final result in the form of a design prototype.
                            </div>
                            <a href="" className="about__info-btn">
                                <BsDownload className="about__info-btn-cv" />Download CV
                            </a>
                            <ul className="about__info-icon">
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
                </div>
            </div>

            <div className="container">
                <div className="about__bg-box">
                    <div className="common">
                        <div className="about__bg">
                            <h2>
                                {header.title}
                            </h2>
                        </div>
                    </div>
                    <div className="row alignCenter">
                        <div className="col-6">
                            <div className="common">
                                <div className="about__bg-subtitle">
                                    <h3>
                                        Educational
                                    </h3>
                                </div>
                            </div>
                            <div className="about__bg-img1">
                                <img src="/images/educational.svg" alt="educational" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="common">
                                <div className="about__bg-subtitle">
                                    <h3>
                                        Experiences
                                    </h3>
                                </div>
                            </div>
                            <div className="about__bg-img2">
                                <img src="/images/experiences.svg" alt="experiences" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="tools_skills">
                <div className="container">
                    <div className="row h-450 alignCenter">
                        <div className="col-6">
                            <div className="about__ts">
                                <h2>{header.mainHeader2}</h2>
                                <p>
                                    I have the expertise to use several 
                                    applications such as the following
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                {state.map((info) => (
                                    <div className="col-4">
                                        <div className="about__ts-box">
                                            <li>
                                                <img src={info.img} alt="img" />
                                            </li>
                                            <div className="about__ts-box-p">
                                                {info.heading}
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
        
    );

}


export default About;
