import dragonReducer from "./reducer/dragonReducer.js";
import {configureStore} from "@reduxjs/toolkit";
import logMiddleware from "./middleware/logMiddleware.js";

const store = configureStore({
 reducer: {
  dragonReducer
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logMiddleware])
})

export default store;