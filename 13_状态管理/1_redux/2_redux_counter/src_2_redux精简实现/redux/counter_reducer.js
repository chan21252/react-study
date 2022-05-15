
const initState = {result: 0};

function updateResult(preResult = initState.result, action) {
  const {type, num} = action;
  switch (type) {
    case "INCREMENT":
      return preResult + num * 1;
    case "DECREMENT":
      return preResult - num * 1;
    case "INCREMENT_IF_ODD":
      if (preResult % 2 === 0) {
        return preResult;
      } else {
        return preResult + num * 1;
      }
    case "INCREMENT_ASYNC":
      return preResult + num * 1;
    default:
      return preResult;
  }
}

function reducer(prevState = initState, action) {
  return {
    result: updateResult(prevState.result, action)
  }
}


export default reducer;