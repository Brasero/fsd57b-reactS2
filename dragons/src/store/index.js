import dragonReducer from "./reducer/dragonReducer.js";
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import logReducer from "./reducer/logReducer.js";
import logMiddleware from "./middleware/logMiddleware.js";

const store = createStore(combineReducers({
 dragonReducer,
 logReducer
}), applyMiddleware(logMiddleware))

export default store;