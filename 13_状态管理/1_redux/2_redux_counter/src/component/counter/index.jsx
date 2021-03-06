import React, {Component} from 'react';

class Counter extends Component {

  increment = () => {
    const num = this.selectRef.value;
    this.props.increment(num);
  }
  decrement = () => {
    const num = this.selectRef.value;
    this.props.decrement(num);
  }

  incrementIfOdd = () => {
    const num = this.selectRef.value;
    this.props.incrementIfOdd(num);
  }

  incrementAsync = () => {
    const num = this.selectRef.value;
    this.props.incrementAsync(num, 1000);
  }

  render() {
    return (
      <div>
        <h4>结果为:{this.props.result}</h4>
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