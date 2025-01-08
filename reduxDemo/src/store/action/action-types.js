import {ADD_MESSAGE, DECREMENT, INCREMENT, SET_MESSAGE} from "../constant/action.js";

export const increment = () => {
 return {
  type: INCREMENT
 }
}

export const decrement = () => {
 return {
  type: DECREMENT
 }
}

export const setMessage = (payload) => {
 return {
  type: SET_MESSAGE,
  payload
 }
}

export const addMessage = () => {
 return {
  type: ADD_MESSAGE
 }
}