import './App.css';

import React, {Component} from 'react';
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sider from "@/component/Sider";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./component/MyNavLink";

class App extends Component {
  render() {
    return (
      <div className="layout layout-has-sider">
        <aside className="layout-sider">
          <Sider/>
        </aside>

        <section className="layout">
          <header className="layout-header">
            <Header/>
          </header>

          <main className="layout-content">
            <Switch>
              {/* 注册路由 */}
              {/* exact：开启严格匹配 */}
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Redirect to="/about"/>
            </Switch>
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
