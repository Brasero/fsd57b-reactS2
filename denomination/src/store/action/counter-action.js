import {INCREMENT_COUNTER, RESET_COUNTER} from "../constant/counter-action-type.js";

export const incrementCounter = () => {
 return {
  type: INCREMENT_COUNTER
 }
}

export const resetCounter = () => {
 return {
  type: RESET_COUNTER
 }
}