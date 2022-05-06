import React, {Component} from 'react';
import './App.css';
import Search from "./component/Search";
import List from "./component/List";

class App extends Component {
  state = {
    userList: [], // 用户列表
    err: '',      // 错误消息
    isInitPage: true,  // 是否是初始页面
    isLoading: false,  // 是否加载中
  }

  // 更新用户list
  setUserList = (userList) => {
    this.setState({userList});
  }

  // 更新组件状态
  updateState = (state) => {
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <Search setUserList={this.setUserList} updateState={this.updateState} {...this.state}/>
        <List {...this.state} />
      </div>
    );
  }
}

export default App;