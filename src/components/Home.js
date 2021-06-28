import React, { Component } from 'react';
import Banner from "./Banner";
import Services from "./Services";
import Contact from "./Contact";
import Copyright from './Copyright';

class Home extends Component {
    render() {
        return(
            <div>
                <Banner />
                <Services />
                <Contact />
                <Copyright />
            </div>
        );
    }
}

export default Home;
