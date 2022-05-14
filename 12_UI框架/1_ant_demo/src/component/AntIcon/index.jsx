import React, {Component} from 'react';
import {Space} from "antd";
import {AppleFilled, Html5TwoTone, SyncOutlined, WindowsOutlined} from "@ant-design/icons";

class AntIcon extends Component {
  render() {
    return (
      <Space>
        <AppleFilled style={{fontSize: '28px'}}/>
        <WindowsOutlined style={{fontSize: '28px'}}/>
        <Html5TwoTone twoToneColor="#eb2f96" style={{fontSize: '28px'}}/>
        <SyncOutlined spin/>
      </Space>
    );
  }
}

export default AntIcon;