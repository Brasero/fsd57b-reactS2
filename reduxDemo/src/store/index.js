import {legacy_createStore, combineReducers} from "redux";
import counterReducer from "./reducer/counterReducer.js";
import messageReducer from "./reducer/messageReducer.js";

const store = legacy_createStore(combineReducers({
 counterReducer,
 messageReducer
}));

export default store;