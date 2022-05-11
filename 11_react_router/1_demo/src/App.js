import './App.css';

import React, {Component} from 'react';
import {Link, NavLink, Redirect, Route} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./component/MyNavLink";

class App extends Component {
  render() {
    return (
      <div className="layout layout-has-sider">
        <aside className="layout-sider">
          <div className="menu">
            <div className="menu-top">
              <div className="menu-item">官网</div>
            </div>
            <ul className="menu-list">
              {/* 编写路由 */}
              <MyNavLink to="/home">主页</MyNavLink>
              <MyNavLink to="/about">关于</MyNavLink>
            </ul>
          </div>
        </aside>

        <section className="layout">
          <header className="layout-header">
            <Header/>
          </header>

          <main className="layout-content">
            {/* 注册路由 */}
            <Route path="/home" component={Home} />
            {/* exact：开启严格匹配 */}
            <Route exact path="/about" component={About} />
            <Redirect to="/about"/>
          </main>

          <footer className="layout-footer">
            <Footer/>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
