// import {ADD_LOG, RESET_LOG} from "../constant/action-type.js";
// import moment from "moment";
//
// const initialState = {
//  logs: []
// }
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
// const getDate = () => moment().format("h:mm:ss")
//
// export default logReducer