import {ADD_DRAGON, DELETE_DRAGON, RANDOM_DRAGON, SET_DRAGON_NAME} from "../constant/action-type.js";

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
   
  case DELETE_DRAGON:
   return {
    ...state,
    dragons: state.dragons.filter((drag) => drag.id !== action.payload)
   }
   
  case RANDOM_DRAGON:
   return {
    ...state,
    dragons: [...state.dragons].sort(() => Math.random() - 0.5)
   }
  
  default:
   return state;
 }
}

export default dragonReducer;