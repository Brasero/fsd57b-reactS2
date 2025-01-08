import {ADD_MESSAGE, SET_MESSAGE} from "../constant/action.js";

const initialState = {
 messages: [],
 message: ""
}

const messageReducer = (state = initialState, action) => {
 switch(action.type) {
  
  case ADD_MESSAGE:
   return {
    ...state,
    messages: state.messages.concat([state.message]),
    message: ""
   }
   
  case SET_MESSAGE:
   return {
    ...state,
    message: action.payload
   }
  
  default:
   return state;
 }
}

export default messageReducer;