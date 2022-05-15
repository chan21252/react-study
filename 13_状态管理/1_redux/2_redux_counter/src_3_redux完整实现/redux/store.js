import {applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import reducer  from "./counter_reducer";
import myMiddleware from "./middleware/my_middleware";

const store = createStore(reducer, applyMiddleware(myMiddleware));
//const store = createStore(reducer, applyMiddleware(thunk));
console.log(store)
export default store;