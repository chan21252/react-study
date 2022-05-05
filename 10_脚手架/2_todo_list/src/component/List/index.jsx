import React, {Component} from 'react';
import Item from "../Item";

class List extends Component {
  render() {
    const {todos, deleteTodo, updateTodo} = this.props
    return (
      <div className="list">
        <ul>
          {
            todos.map((item) => {
              return <Item todo={item} key={item.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;