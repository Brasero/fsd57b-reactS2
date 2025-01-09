import {INCREMENT_COUNTER, RESET_COUNTER} from "../constant/counter-action-type.js";

const initialState = {
 count: 0
}


const counterReducer = (state =  initialState, action) => {
 switch(action.type) {
  
  case INCREMENT_COUNTER:
   return {
    ...state,
    count: state.count + 1
   }
   
  case RESET_COUNTER:
   return {
    ...state,
    count: 0
   }
  
  default:
   return state;
 }
}

export default counterReducer