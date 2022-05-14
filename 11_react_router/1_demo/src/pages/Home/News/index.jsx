import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import "../../../mock/api";
import Details from "./Details";

class News extends Component {
  state = {
    newsList: []
  }

  componentDidMount() {
    axios.get("/api/news/list")
      .then(response => {
        console.log(response.data)
        this.setState({newsList: response.data.result});
      });
  }

  render() {
    const {newsList} = this.state;
    console.log(newsList)
    return (
      <div>
        <ul>
          {
            newsList.map((news) => {
              return (
                <li key={news.id} >
                  <Link to={`/home/news/details/${news.id}`} >{news.title}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default News;