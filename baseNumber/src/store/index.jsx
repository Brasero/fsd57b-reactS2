import {useReducer} from "react";

const initialState = {
 number: "",
 conversion: ""
}

const reducer = (state, action) => {
 switch (action.type) {
  
  case "SET_NUMBER":
   const {number, base} = action.payload;
   let result = parseInt(number, base)
   if (number !== "" && base === 10) {
    return {
     ...state,
     conversion: !isNaN(result) ? result.toString(2) : "Conversion impossible",
     number
    }
   }
   if (number !== "" && base === 2) {
    return {
     ...state,
     number: !isNaN(result) && number.match(/^-?[01]+$/) ? result.toString(10) : "Conversion impossible",
     conversion: number
    }
   }
   return {
    ...state,
    number: "",
    conversion: ""
   }
   
  default:
   return state
 }
}

export const useBaseReducer = () => useReducer(reducer, initialState);