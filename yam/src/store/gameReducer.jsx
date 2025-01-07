import {useReducer} from "react";

const initialResult = {
 triple6: 0,
 triple5: 0,
 triple4: 0,
 triple3: 0,
 triple2: 0,
 triple1: 0
}

const initialState = {
 result: initialResult,
 nbLaunch: 0,
 stats: false
}

const gameReducer = (state, action) => {
 switch (action.type) {
  
  case "SET_NB":
   return {
    ...state,
    nbLaunch: action.payload
   }
   
  case "LAUNCH":
   return {
    ...state,
    result: game(state.nbLaunch),
    stats: true
   }
   
  case "RESET_STATS":
   return {
    ...state,
    stats: false,
    result: initialResult,
    nbLaunch: 0
   }
  
  default:
   return state;
 }
}

const game = (num) => {
 const result = {
  triple6: 0,
  triple5: 0,
  triple4: 0,
  triple3: 0,
  triple2: 0,
  triple1: 0
 };
 const de = () => Math.floor(Math.random() * 6) + 1;
 console.log(result)
 
 for (let i = 0; i < num; i++) {
  const launch = [de(), de(), de()];
  if (launch[0] === launch[1] && launch[1] === launch[2]) {
   const key = `triple${launch[0]}`;
   result[key]++;
  }
 }
 return result
}

export const useGameReducer = () => useReducer(gameReducer, initialState);