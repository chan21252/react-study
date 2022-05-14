import React, {Component} from 'react';
import axios from "axios";

class Details extends Component {
  state = {
    news: {}
  }
  componentDidMount() {
    const {match} = this.props;
    const id = match.params.id;
    axios.get(`/api/news/details/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState({news: response.data.result});
      });
  }

  render() {
    const {news} = this.state;
    return (
      <div>
        {news.id}
      </div>
    );
  }
}

export default Details;