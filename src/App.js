import React, { Component } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import Utama from './components/Utama';
import { Layout, Header, Content } from 'react-mdl';

class App  extends Component {
  render() {
    return(
      <div>
        <Layout>
          <Header className="*">
            <Nav />
          </Header>
          <Content>
            <div><Utama /></div>
          </Content>
        </Layout>
       
      </div>
    );
  }
}

export default App;
