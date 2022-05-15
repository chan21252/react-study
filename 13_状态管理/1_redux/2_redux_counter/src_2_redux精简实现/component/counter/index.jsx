import React, {Component} from 'react';
import store from "../../redux/store";

class Counter extends Component {

  componentDidMount() {
    /*store.subscribe(() => {
      this.setState({})
    });*/
  }

  increment = () => {
    const num = this.selectRef.value;
    store.dispatch({type: "INCREMENT", num});
  }
  decrement = () => {
    const num = this.selectRef.value;
    store.dispatch({type: "DECREMENT", num});
  }

  incrementIfOdd = () => {
    const num = this.selectRef.value;
    store.dispatch({type: "INCREMENT_IF_ODD", num});
  }

  incrementAsync = () => {
    setTimeout(()=>{
      const num = this.selectRef.value;
      store.dispatch({type: "INCREMENT_ASYNC", num});
    }, 1000);
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