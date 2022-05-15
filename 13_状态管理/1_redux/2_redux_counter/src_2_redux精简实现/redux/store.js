import {legacy_createStore as createStore} from "redux";
import reducer  from "./counter_reducer";

const store = createStore(reducer);

export default store;