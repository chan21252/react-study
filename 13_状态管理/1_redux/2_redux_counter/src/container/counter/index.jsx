import React, {Component} from "react";
import {connect} from "react-redux";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
  createIncrementIfOddAction
} from "../../redux/action/counter_action";

/**
 * react ui组件
 */
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
      <form>
        <h4>结果为:{this.props.result}</h4>
        <div className="form-group form-row">
          <select name="select-num" className="col-2 form-control mr-3" ref={e => this.selectRef = e}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
          <div className="col">
            <button type="button" className="btn btn-outline-primary mr-2" onClick={this.increment}>加</button>
            <button type="button" className="btn btn-outline-primary mr-2" onClick={this.decrement}>减</button>
            <button type="button" className="btn btn-outline-primary mr-2" onClick={this.incrementIfOdd}>是奇数才加</button>
            <button type="button" className="btn btn-outline-primary mr-2" onClick={this.incrementAsync}>异步加</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({result: state.result, ownProps: ownProps.id});

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (num) => dispatch(createIncrementAction(num)),
    decrement: (num) => dispatch(createDecrementAction(num)),
    incrementIfOdd: (num) => dispatch(createIncrementIfOddAction(num)),
    incrementAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time))
  }
}*/
const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementIfOdd: createIncrementIfOddAction,
  incrementAsync: createIncrementAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);