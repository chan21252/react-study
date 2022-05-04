import {Component} from "react";
import logo from '../../assets/logo.svg';
import hello from './index.module.css';

class Hello extends Component {
  render() {
    return (
      <div className={hello.hello}>
        <img src={logo} className={hello.logo} alt="logo"/>
        <h2>Hello, React</h2>
      </div>
    )
  }
}

export default Hello