import React, {Component} from 'react';
import {Provider} from "react-redux";
import CounterContainer from "./container/counter";
import "./App.css";
import store from "./redux/store";
import Person from "./container/person";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
          <CounterContainer id={123}/>
          <hr/>
          <Person/>
        </Provider>
      </div>
    );
  }
}

export default App;