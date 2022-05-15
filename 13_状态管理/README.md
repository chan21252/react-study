# 状态管理

## 概念
多个组件用到同一个状态，避免属性传递过多，依赖关系复杂，将共用状态抽离出来统一管理。



## Redux
![redux原理图-1.jpg](https://s2.loli.net/2022/05/14/xo1ikb32BJetHqn.png)

![redux原理图-2.gif](https://s2.loli.net/2022/05/14/y81ZYCbcBOp9L7G.gif)

### 设计理念

- state 保存应用状态
- action 表示更新state的操作，由type和data组成，type表示操作类型，data表示新的数据
- dispatch 应用不直接操作state，而是通过dispatch不同的action来分别更新
- reducer reducer对dispatch统一管理，返回新的state

纯js实现一个简单的状态管理例子：
[counter](https://gitee.com/chan21252/react-study/blob/master/13_%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86/1_redux/1_core_concept/counter_v2.html)

### 介绍安装
- 中文官网：http://cn.redux.js.org/
- 英文官网：https://redux.js.org/

安装：`npm install redux`

### 使用
1. 创建reducer，reducer统一根据不同的action更新state状态
2. 用reducer创建store，createStore(reducer)
3. 获取state，store.getState()
4. 更新state，store.dispatch(action)

异步action：
store.dispatch(action)执行时，传入的action是一般对象，则是同步action，如果需要对action进行一些包装，或者异步执行，传入的action可以是一个函数，这就是异步action。

### 中间件
创建store时可以指定中间件，向applyMiddleware()传入中间件， `createStore(reducer, applyMiddleware(...middleware)`

自定义中间件
```js

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
```
