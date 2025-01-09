import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./reducer/todoSlice.jsx";

const store = configureStore({
 reducer: {
  todoSlice
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
})
export default store;