import React, {Component} from 'react';
import {Button, Space} from "antd";

class AntButton extends Component {
  render() {
    return (
      <Space>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br/>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
    );
  }
}

export default AntButton;