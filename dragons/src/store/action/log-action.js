import {ADD_LOG, RESET_LOG} from "../constant/action-type.js";

export const addLog = (payload) => {
 return {
  type: ADD_LOG,
  payload
 }
}

export const resetLog = () => {
 return {
  type: RESET_LOG
 }
}