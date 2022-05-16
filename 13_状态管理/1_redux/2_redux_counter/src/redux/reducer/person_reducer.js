import {ADD} from "../constant";

const initState = [];

const reducer = (prevState = initState, action) => {
  const {type, data} = action;
  switch (type) {
    case ADD:
      return prevState.concat(data);
    default:
      return prevState;
  }
}

export default reducer;