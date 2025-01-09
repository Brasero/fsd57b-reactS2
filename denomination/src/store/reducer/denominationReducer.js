import {denominations} from "../../constant/denominations.js";
import {
 CALC_DENOMINATION,
 RESET_DENOMINATION,
 SET_DENOMINATION_CHOICE,
 SET_DENOMINATION_VALUE
} from "../constant/denomination-action-types.js";

const initialState = {
 selectedDenomination: denominations.den1, value: "", denominations: []
}

const denominationReducer = (state = initialState, action) => {
 switch (action.type) {
  
  case SET_DENOMINATION_VALUE:
   return {
    ...state, value: action.payload
   }
  
  case CALC_DENOMINATION:
   return {
    ...state, denominations: calcDenomination([...state.selectedDenomination], state.value)
   }
  
  case RESET_DENOMINATION:
   return {
    ...state, value: "", denominations: []
   }
   
  case SET_DENOMINATION_CHOICE:
   return {
    ...state,
    selectedDenomination: action.payload,
    denominations: calcDenomination([...action.payload], state.value)
   }
  
  default:
   return state;
 }
}

const calcDenomination = (selectedDenomination = [], value) => {
 return selectedDenomination
  .slice()
  .sort((a,b) => b-a)
  .reduce((acc, curr) => {
   const mod = value % curr
   if (mod === 0) {
    acc.push({label: curr, amount: value / curr})
    value = 0;
    return acc
   }
   const amount = Math.floor(value / curr)
   value -= amount * curr
   acc.push({label: curr, amount})
   return acc
 }, [])
}

export default denominationReducer