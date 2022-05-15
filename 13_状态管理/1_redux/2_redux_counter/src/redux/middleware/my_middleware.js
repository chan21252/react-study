/**
 * 判断是不是一般对象{xxx: xxx}
 *
 * @param obj
 * @returns {boolean}
 */
const isPlainObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * 中间件，该函数由store的applyMiddleware调用
 *
 * @param storeAPI store对象的API，有dispatch和getState
 * @returns {function(*): function(*): (*|undefined)}
 */
const myMiddleware = storeAPI =>

  /*
   * wrapDispatch接收一个next函数参数，
   * next是管道里的下一个中间件，next(action)将action传个下一个中间件
   * 如果是没有中间件了，next就是store.dispatch
   */
  next =>

    /*
     * 处理action，可以实现异步action
     */
    action => {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here
      if (isPlainObject(action)) {
        console.log('action是一个对象，同步action');
        return next(action);
      } else {
        console.log('action是一个函数，异步action');
        action(storeAPI.dispatch);
      }
    }

export default myMiddleware;