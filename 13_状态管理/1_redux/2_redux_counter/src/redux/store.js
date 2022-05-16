import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import counterReducer from "./reducer/counter_reducer";
import personReducer from './reducer/person_reducer';
import myMiddleware from "./middleware/my_middleware";

const reducer = combineReducers({counter: counterReducer, persons: personReducer});
const store = createStore(reducer, applyMiddleware(myMiddleware));
//const store = createStore(reducer, applyMiddleware(thunk));
console.log(store)
export default store;