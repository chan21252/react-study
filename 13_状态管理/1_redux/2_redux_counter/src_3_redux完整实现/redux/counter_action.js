import {DECREMENT, INCREMENT, INCREMENT_ASYNC, INCREMENT_IF_ODD} from "./constant";

const createIncrementAction = num => ({type: INCREMENT, num});
const createDecrementAction = num => ({type: DECREMENT, num});
const createIncrementIfOddAction = num => ({type: INCREMENT_IF_ODD, num});
const createIncrementAsyncAction = (num, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(num))
    }, time);
  }
};

export {createIncrementAction, createDecrementAction,
  createIncrementIfOddAction, createIncrementAsyncAction};