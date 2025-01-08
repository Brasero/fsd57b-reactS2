import dragonReducer from "./reducer/dragonReducer.js";
import {legacy_createStore as createStore, combineReducers} from "redux";

const store = createStore(combineReducers({
 dragonReducer
}))

export default store;