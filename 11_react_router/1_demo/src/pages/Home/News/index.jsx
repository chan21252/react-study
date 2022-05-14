import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import axios from "axios";
import "@/mock/api";
import Details from "./Details";

class News extends Component {
  state = {
    newsList: []
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
                  {/*<Link to={`/home/news/details?id=${news.id}`}>{news.id}.{news.title}</Link>*/}
                  {/* state传递参数 */}
                  <Link to={{pathname:'/home/news/details', state: {id: news.id}}}>{news.id}.{news.title}</Link>
                </li>
              );
            })
          }
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