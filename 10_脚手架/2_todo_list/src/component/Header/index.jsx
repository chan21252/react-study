import React, {Component} from 'react';
import {nanoid} from "nanoid";


class Header extends Component {
  handleInput = (event) => {
    const {target, keyCode} = event;

    // 只响应回车键
    if (keyCode !== 13) return;
    // 内容不为空
    if (target.value === '') return;
    // 创建to-do对象
    const todo = {id: nanoid(), name: target.value, done: false};
    // to-do添加到App的state中
    this.props.addTodo(todo);

    target.value = '';
  }

  render() {
    return (
      <div className="header">
        <input type="text" onKeyUp={this.handleInput} name="input" placeholder="输入to-do，回车确认"/>
      </div>
    );
  }
}

export default Header;