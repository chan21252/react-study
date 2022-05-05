import React, {Component} from 'react';
import PropType from 'prop-types';

class Item extends Component {

  state = {
    active: false //标识to-do是否高亮
  }

  // 鼠标选中回调
  handleMouse = (flag) => {
    return (event) => {
      this.setState({active: flag})
    }
  }

  // 删除按钮回调
  handleDelete = (id) => {
    return (event) => {
      this.props.deleteTodo(id);
    }
  }

  // checkbox改变选中
  handleChange = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  render() {
    const {todo} = this.props;
    const {active} = this.state;
    let itemClassName = active ? "item active" : "item"
    return (
      <li className={itemClassName}
          onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={todo.done} onChange={this.handleChange(todo.id)}/>
          {todo.name}
        </label>
        <div className="btn btn-sm btn-danger" style={{display: active ? "block" : "none"}}
             onClick={this.handleDelete(todo.id)}>删除
        </div>
      </li>
    );
  }
}

export default Item;