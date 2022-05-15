import React, {Component} from 'react';
import store from "../../redux/store";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
  createIncrementIfOddAction
} from "../../redux/counter_action";

class Counter extends Component {

  componentDidMount() {
    /*store.subscribe(() => {
      this.setState({})
    });*/
  }

  increment = () => {
    const num = this.selectRef.value;
    store.dispatch(createIncrementAction(num));
  }
  decrement = () => {
    const num = this.selectRef.value;
    store.dispatch(createDecrementAction(num));
  }

  incrementIfOdd = () => {
    const num = this.selectRef.value;
    store.dispatch(createIncrementIfOddAction(num));
  }

  incrementAsync = () => {
    const num = this.selectRef.value;
    store.dispatch(createIncrementAsyncAction(num, 1000));
  }

  render() {
    return (
      <div>
        <h4>结果为:{store.getState().result}</h4>
        <select name="select-num" ref={e => this.selectRef = e}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>是奇数才加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

export default Counter;