import './App.css';

import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";

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
              <Link to="/home" className="menu-item">主页</Link>
              <Link to="/about" className="menu-item">关于</Link>
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
            <Route path="/about" component={About} />
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
