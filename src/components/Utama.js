import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Work from './Work';
import ContactPage from './ContactPage';

const Utama = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Work" component={Work} />
            <Route path="/ContactPage" component={ContactPage} />
        </Switch>
    )
}

export default Utama;
