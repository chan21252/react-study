import React, {Component} from 'react';
import '@ant-design/icons';
import '@/App.css';
import {Divider} from "antd";
import AntButton from "@/component/AntButton";
import AntDatePicker from "@/component/AntDatePicker";
import AntIcon from "@/component/AntIcon";
import AntMenu from "@/component/AntMenu";

class App extends Component {
  render() {
    return (
      <div>
        <AntButton/>
        <Divider/>
        <AntDatePicker/>
        <Divider/>
        <AntIcon/>
        <Divider/>
        <AntMenu/>
      </div>
    );
  }
}

export default App;
