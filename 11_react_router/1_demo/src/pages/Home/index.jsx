import React, {Component} from 'react';

class Index extends Component {
  render() {
    const {props} = this;
    console.log('home接受到的props', props);
    return (
      <div className="content">
        <h3>Home</h3>
      </div>
    );
  }
}

export default Index;