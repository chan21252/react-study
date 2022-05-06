import React, {Component} from 'react';
import './App.css';
import Search from "./component/Search";
import List from "./component/List";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}

export default App;