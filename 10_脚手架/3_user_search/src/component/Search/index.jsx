import React, {Component} from 'react';
import PubSub from "pubsub-js";

class Search extends Component {

  // 搜索点击回调
  handleSearch = () => {
    const {value} = this.searchInputRef;
    if (value === '') {
      return;
    }
    // 发布消息
    console.log('发布消息---search:', value);
    PubSub.publish('search', value);
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input type="text" ref={e => this.searchInputRef = e} placeholder="输入搜索用户名"/>&nbsp;
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;