import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import axios from "axios";
import "@/mock/api";
import Details from "./Details";

class News extends Component {
  state = {
    newsList: []
  }

  pushShow = (id) => {
    // param
    // this.props.history.push(`/home/news/details/${id}`);
    // query
    this.props.history.push(`/home/news/details?id=${id}`);
    // state
    // this.props.history.push(`/home/news/details`, {id});
  }

  replaceShow = (id) => {
    // param
    // this.props.history.replace(`/home/news/details/${id}`);
    // param
    this.props.history.replace(`/home/news/details?id=${id}`);
    // state
    // this.props.history.replace(`/home/news/details`, {id});
  }

  componentDidMount() {
    axios.get("/api/news/list")
      .then(response => {
        console.log("获取新闻列表", response.data)
        this.setState({newsList: response.data.data});
      });
  }

  render() {
    const {newsList} = this.state;
    return (
      <div>
        <ol>
          {
            newsList.map((news) => {
              return (
                <li key={news.id} >
                  {/* param传递参数 */}
                  {/*<Link to={`/home/news/details/${news.id}`} >{news.id}.{news.title}</Link>*/}
                  {/* search传递参数 */}
                  <Link to={`/home/news/details?id=${news.id}`}>{news.id}.{news.title}</Link>
                  {/* state传递参数 */}
                  {/*<Link to={{pathname:'/home/news/details', state: {id: news.id}}}>{news.id}.{news.title}</Link>*/}
                  <button onClick={() => {this.pushShow(news.id)}} className="btn btn-primary">push查看</button>
                  <button onClick={() => {this.replaceShow(news.id)}} className="btn btn-primary">replace查看</button>
                </li>
              );
            })
          }
          <button onClick={this.props.history.goForward} className="btn btn-primary">前进</button>
          <button onClick={this.props.history.goBack} className="btn btn-primary">后退</button>

        </ol>
        <section className="content-panel">
          {/* param接受参数 */}
          {/*<Route path="/home/news/details/:id" component={Details}/>*/}
          <Route path="/home/news/details" component={Details}/>
        </section>
      </div>
    );
  }
}

export default News;