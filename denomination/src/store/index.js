import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import denominationReducer from "./reducer/denominationReducer.js";
import counterReducer from "./reducer/counterReducer.js";
import {counterMiddleware} from "./middleware/counterMiddleware.js";

const store = createStore(combineReducers({
 denominationReducer,
 counterReducer
}), applyMiddleware(counterMiddleware));
export default store;