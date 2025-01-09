import dragonReducer from "./reducer/dragonReducer.js";
import {configureStore} from "@reduxjs/toolkit";
import logMiddleware from "./middleware/logMiddleware.js";
import logReducer from "./reducer/logReducer.js";
import todoReducer from "./reducer/todoSlice.js";

const store = configureStore({
 reducer: {
  dragonReducer,
  logReducer,
  todoReducer
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logMiddleware])
})

export default store;