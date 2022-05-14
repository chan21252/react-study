import React, {Component} from 'react';
import axios from "axios";
import queryString from "query-string";

class Details extends Component {
  state = {
    news: {}
  }

  // 获取details数据
  getDetailsData = (id) => {
    axios.get(`/api/news/details/${id}`)
      .then(response => {
        const data = response.data.data;
        console.log("获取news数据", id, data)
        this.setState({news: data});
      });
  }

  // 路由参数变化时，重新获取数据
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    const {match, location} = nextProps
    // 接受params参数
    // const id = match.params.id;
    // 接受search参数
    const search = queryString.parse(location.search);
    const id = search.id;
    // 接受state参数
    // const {id} = location.state || {};
    if (id) {
      this.getDetailsData(id);
    }
  }

  // 挂载完毕获取数据
  componentDidMount() {
    const {match, location} = this.props
    // 接受params参数
    // const id = match.params.id;
    // 接受search参数
    const search = queryString.parse(location.search);
    const id = search.id;
    // 接受state参数
    // const {id} = location.state || {};
    if (id) {
      this.getDetailsData(id);
    }
  }

  render() {
    const {news} = this.state;
    return (
      <div>
        <h4>{news.id}-{news.title}</h4>
        <div>{news.author}</div>
        <p>{news.content}</p>
      </div>
    );
  }
}

export default Details;