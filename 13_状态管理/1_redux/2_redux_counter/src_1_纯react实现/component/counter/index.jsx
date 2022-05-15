import React, {Component} from 'react';

class Counter extends Component {
  state = {
    result: 0
  }

  increment = () => {
    const num = this.selectRef.value;
    const preResult = this.state.result;
    this.setState({result: preResult + num * 1});
  }
  decrement = () => {
    const num = this.selectRef.value;
    const preResult = this.state.result;
    this.setState({result: preResult - num * 1});
  }

  incrementIfOdd = () => {
    const preResult = this.state.result;
    if (preResult % 2 <= 0) {
      return;
    }
    const num = this.selectRef.value;
    this.setState({result: preResult + num * 1});
  }

  incrementAsync = () => {
    setTimeout(()=>{
      const num = this.selectRef.value;
      const preResult = this.state.result;
      this.setState({result: preResult + num * 1});
    }, 1000);
  }

  render() {
    return (
      <div>
        <h4>结果为:{this.state.result}</h4>
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