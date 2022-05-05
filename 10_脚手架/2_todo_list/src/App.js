import {Component} from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import List from "./component/List";

export default class App extends Component {
  state = {
    todos: [
      {id: 1, name: '吃饭', done: true},
      {id: 2, name: '睡觉', done: false},
      {id: 3, name: '敲代码', done: true},
    ]
  }

  // 添加to-do项
  addTodo = (todo) => {
    const {todos} = this.state;
    const newTodos = [todo, ...todos]
    this.setState({todos: newTodos});
  }

  // 删除to-do项
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((item) => {
      return item.id !== id
    });
    this.setState({todos: newTodos});
  }

  // 更新to-do状态
  updateTodo = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map((item) => {
      if (id === item.id) {
        return {...item, done: done}
      } else {
        return item
      }
    });
    this.setState({todos: newTodos});
  }

  // 更新所有的to-do项状态
  updateAllTodo = (flag) => {
    const {todos} = this.state;
    const newTodos = todos.map((item) => {
      return {...item, done: flag}
    });
    this.setState({todos: newTodos});
  }

  deleteDoneTodo = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((item) => {
      return !item.done
    });
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state
    return (
      <div className="app">
        <Header addTodo={this.addTodo}/>
        <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
        <Footer todos={todos} updateAllTodo={this.updateAllTodo} deletDoneTodo={this.deleteDoneTodo}/>
      </div>
    )
  }
}