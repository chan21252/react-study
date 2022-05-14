import React, {Component} from 'react';
import {DatePicker, Space} from "antd";

class AntDatePicker extends Component {
  onChange = (e) => {
    console.log(e);
  }

  render() {
    return (
      <Space>
        <DatePicker onChange={this.onChange}/>
        <DatePicker onChange={this.onChange} picker="week"/>
        <DatePicker onChange={this.onChange} picker="month"/>
        <DatePicker onChange={this.onChange} picker="quarter"/>
        <DatePicker onChange={this.onChange} picker="year"/>
      </Space>
    );
  }
}

export default AntDatePicker;