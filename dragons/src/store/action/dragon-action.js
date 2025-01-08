import {ADD_DRAGON, SET_DRAGON_NAME} from "../constant/action-type.js";

export const setDragonName = (payload) => {
 return {
  type: SET_DRAGON_NAME,
  payload
 }
}

export const addDragon = () => {
 return {
  type: ADD_DRAGON
 }
}