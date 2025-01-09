import {ADD_DRAGON, DELETE_DRAGON, RANDOM_DRAGON, SET_DRAGON_NAME} from "../constant/action-type.js";

export const setDragonName = (payload) => {
 return {
  type: SET_DRAGON_NAME,
  payload
 }
}

export const addDragon = (payload) => {
 return {
  type: ADD_DRAGON,
  payload
 }
}

export const deleteDragon = (payload) => {
 return {
  type: DELETE_DRAGON,
  payload
 }
}
export const sortRandomDragon = () => {
 return {
  type: RANDOM_DRAGON
 }
}