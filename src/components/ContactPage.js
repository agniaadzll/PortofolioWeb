import React, { Component } from 'react';
import Contact from "./Contact";
import Copyright from './Copyright';

class ContactPage extends Component {
    render() {
        return(
            <div>
                <Contact />
                <Copyright />
            </div>
        );
    }
}

export default ContactPage;
