// import {ADD_LOG, RESET_LOG} from "../constant/action-type.js";
import moment from "moment";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
//
 const initialState = {
  logs: []
 }
//
// const logReducer = (state = initialState, action) => {
//  switch (action.type) {
//
//   case ADD_LOG:
//    return {
//     ...state,
//     logs: state.logs.concat([{
//      date: getDate(),
//      ...action.payload,
//      // Equivalent à ci dessus
//      // actionName: action.payload.actionName,
//      // dragonName: action.payload.dragonName
//     }])
//    }
//
//   case RESET_LOG:
//    return initialState;
//
//
//   default:
//    return state;
//  }
// }
//
const getDate = () => moment().format("h:mm:ss")
//
// export default logReducer

export const delayedReset = createAsyncThunk("log/delayedLog", async () => {
 return new Promise((resolve) => setTimeout(() => resolve([]), 5000))
})

const logSlice = createSlice({
 name: "log",
 initialState,
 reducers: {
  addLog(state,action) {
   state.logs = state.logs.concat([{
    date: getDate(),
    ...action.payload
   }])
  },
  resetLog(state, action) {
   state.logs = []
  }
 },
 extraReducers: (builder) => {
  builder.addCase(delayedReset.fulfilled, (state, action) => {
   state.logs = action.payload;
  })
 }
})

export const {
  addLog,
 resetLog
} = logSlice.actions

export default logSlice.reducer