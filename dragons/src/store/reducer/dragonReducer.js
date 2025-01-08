import {ADD_DRAGON, SET_DRAGON_NAME} from "../constant/action-type.js";

let id = 0;

const initialState = {
 dragons: [],
 dragon: {
  id: id++,
  name: ""
 }
}

const dragonReducer = (state = initialState, action) => {
 switch(action.type) {
  
  case SET_DRAGON_NAME:
   return {
    ...state,
    dragon: {
     ...state.dragon,
     name: action.payload
    }
   }
   
  case ADD_DRAGON:
   return {
    ...state,
    dragon: {
     id: id++,
     name: ""
    },
    dragons: state.dragons.concat([{...state.dragon, name: state.dragon.name.trim()}])
   }
  
  default:
   return state;
 }
}

export default dragonReducer;