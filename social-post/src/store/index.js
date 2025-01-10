import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer.js";
import postReducer from "./reducer/postReducer.js";

const store = configureStore({
 reducer: {
  userReducer,
  postReducer
 }
})

export default store;