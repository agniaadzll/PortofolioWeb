import React from 'react';
import {IoLaptopOutline, IoShapesOutline, IoGlobeOutline} from "react-icons/io5";

const Services = () => {
        const [header] = React.useState({mainHeader: "What I Do?"});
        const [state] = React.useState([
            {
                id: 1, 
                icon: <IoLaptopOutline />, 
                heading: "UI/UX Design", 
                text: 
                "Create brand identify, define the communication mood with end users,\
                developing wireframes, mockups and prototyping." 
            },
            {
                id: 2, 
                icon: <IoShapesOutline />, 
                heading: "Graphic Design", 
                text: 
                "Developing concepts, graphics and layouts for product illustrations,\
                company logos and working with clients to briefing design style." 
            },
            {
                id: 3, 
                icon: <IoGlobeOutline />, 
                heading: "Web Design", 
                text: 
                "Create layouts visually design with creativity in each element and\
                converting visual layout to HTML and CSS." 
            },
        ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h2 className="mainHeader">
                            {header.mainHeader}
                        </h2>
                    </div>

                    <div className="row">
                        {state.map((info) => (
                            <div className="col-4">
                                <div className="services__box">
                                    <li>
                                        {info.icon}
                                    </li>
                                    <div className="services__box-header">
                                        {info.heading}
                                    </div>
                                    <div className="services__box-p">
                                        {info.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services;
