import {
 CALC_DENOMINATION,
 RESET_DENOMINATION,
 SET_DENOMINATION_CHOICE,
 SET_DENOMINATION_VALUE
} from "../constant/denomination-action-types.js";

export const setDenominationValue = (payload) => {
 return {
  type: SET_DENOMINATION_VALUE,
  payload
 }
}

export const calculateDenomination = () => {
 return {
  type: CALC_DENOMINATION
 }
}

export const resetDenomination = () => {
 return {
  type: RESET_DENOMINATION
 }
}

export const setDenominationChoice = (payload) => {
 return {
  type: SET_DENOMINATION_CHOICE,
  payload
 }
}