import React, {Component} from 'react';
import {Provider} from "react-redux";
import CounterContainer from "./container/counter";
import "./App.css";
import store from "./redux/store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer id={123}/>
      </Provider>
    );
  }
}

export default App;