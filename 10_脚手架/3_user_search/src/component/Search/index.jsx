import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

  // 搜索点击回调
  handleSearch = () => {
    const {value} = this.searchInput;
    const {setUserList, updateState, isInitPage} = this.props;

    if (value === '') {
      return;
    }

    // 改变页面初始状态
    if (isInitPage) {
      updateState({isInitPage: false});
    }

    // 搜索请求
    updateState({isLoading: true}); // 开始loading
    axios.get(`https://api.github.com/search/users?q=${value}`)
      .then(
        (res) => {
          setUserList(res.data.items)
          updateState({err: ''}); //正确返回，清空err
        },
        (err) => {
          updateState({err: err.message});
        })
      .finally(() => {
        updateState({isLoading: false});  // 结束loading
      });
  }


  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input type="text" ref={e => this.searchInput = e} placeholder="输入搜索用户名"/>&nbsp;
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;