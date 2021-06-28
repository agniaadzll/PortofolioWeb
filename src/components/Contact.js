import React from 'react';
import {FaDribbble, FaBehance, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row h-450 alignCenter">
                    <div className="contact__info">
                        <h2>
                            Let's Work Together
                        </h2>
                        <p>
                            My previous work and my portofolio that I was working on 
                            for our cilents. We start new brand together and make your brand 
                            to be number one in the world.
                        </p>
                        <a href="" className="">
                            agniaadzll@gmail.com
                        </a>
                        <div className="contact__icon">
                            <ul className="contact__icon-ul">
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
        </div>
    )
}

export default Contact;
