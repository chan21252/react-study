import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
  render() {
    const {props} = this;
    console.log(props);
    return (
      <NavLink className="menu-item" {...props} >{props.children}</NavLink>
    );
  }
}

export default MyNavLink;