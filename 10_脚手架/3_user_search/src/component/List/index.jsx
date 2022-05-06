import React, {Component} from 'react';
import PubSub from 'pubsub-js';
import axios from "axios";

class List extends Component {
  state = {
    userList: [], // 用户列表
    err: '',      // 错误消息
    isInitPage: true,  // 是否是初始页面
    isLoading: false,  // 是否加载中
  }

  componentDidMount() {
    // 订阅消息
    console.log('订阅消息');
    this.token = PubSub.subscribe('search', this.getUserListData);
  }

  componentWillUnmount() {
    console.log('取消订阅消息');
    PubSub.unsubscribe(this.token);
  }

  // 获取用户数据
  getUserListData = (_, keyword) => {
    console.log(`收到消息---${_}: ${keyword}`);

    if (keyword === '' || typeof keyword === "undefined") {
      return;
    }

    this.setState({isLoading: true, isInitPage: false}); // 开始loading
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(
        (res) => {
          this.setState({userList: res.data.items, err: ''})
        },
        (err) => {
          this.setState({err: err.message});
        })
      .finally(() => {
        this.setState({isLoading: false});  // 结束loading
      });
  }


  render() {
    const {userList, err, isInitPage, isLoading} = this.state;
    return (
      <div className="row">
        {
          isInitPage ? <h3>搜索结果在这里展示...</h3> :
          isLoading ? <h3>加载中...</h3> :
          err === '' ?
            userList.map((user) => {
              return (
                <div className="card" key={user.id}>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              );
            }) : <h3>{err}</h3>
        }
      </div>
    );
  }
}

export default List;