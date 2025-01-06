import {useReducer} from "react";

const initialState = {
 name: "",
 users: [],
 error: ""
}

const userExist = (user, users) => {
 return users.includes(user.trim())
}

const reducer = (state, action) => {
 switch(action.type) {
  
  case "update_name":
   return {
    ...state,
    name: action.payload.toUpperCase(),
    error: ""
   }
   
  case "add_user":
   return userExist(state.name, state.users) ?
    {
     ...state,
     error: "Cet utilisateur existe déjà"
    } : {
    ...state,
     users: state.users.concat([state.name]),
     error: "",
     name: ""
    }
    
  case "update_error":
   return {
    ...state,
    error: action.payload
   }
  
  default:
   return state;
 }
}

const useUserReducer = () => useReducer(reducer, initialState);

export default useUserReducer;