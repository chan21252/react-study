import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-bar">
        <h3>Header</h3>
        <button onClick={this.props.history.goForward} style={{top: '16px', marginLeft:'20px'}} className="btn btn-primary">εθΏ</button>
        <button onClick={this.props.history.goBack} style={{top: '16px'}} className="btn btn-primary">ει</button>
      </div>
    );
  }
}

export default withRouter(Header);