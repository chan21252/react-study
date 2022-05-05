import React, {Component} from 'react';

class Footer extends Component {

  // 全部选中/未选中回调
  handleChange = (event) => {
    this.props.updateAllTodo(event.target.checked);
  }

  // 清空已完成回调
  handleDelete = () => {
    this.props.deletDoneTodo();
  }

  render() {
    const {todos} = this.props;
    const total = todos.length;
    const did = todos.reduce((pre, item) => {
      return item.done ? pre + 1 : pre;
    }, 0);
    return (
      <div className="footer">
        <label className="progress">
          <input type="checkbox" onChange={this.handleChange} checked={total !== 0 && did === total}/>
          已完成 {did} / {total}
        </label>
        <div className="btn btn-danger" onClick={this.handleDelete}>清空已完成</div>
      </div>
    );
  }
}

export default Footer;