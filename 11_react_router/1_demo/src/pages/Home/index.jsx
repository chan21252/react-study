import React, {Component} from 'react';
import MyNavLink from "../../component/MyNavLink";
import {Redirect, Route} from "react-router-dom";
import News from "./News";
import Message from "./Message";

class Home extends Component {
  render() {
    const {props} = this;
    console.log('home接受到的props', props);
    return (
      <div className="content">
        <h3>Home</h3>
        <ul className="content-tab">
          <MyNavLink to="/home/news" className="content-tab-item">News</MyNavLink>
          <MyNavLink to="/home/message" className="content-tab-item">Message</MyNavLink>
        </ul>
        <section className="content-panel">
          <Route path="/home/news" component={News}/>
          <Route path="/home/message" component={Message}/>
          <Redirect to="/home/news"/>
        </section>
      </div>
    );
  }
}

export default Home;