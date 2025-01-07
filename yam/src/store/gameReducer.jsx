import {useReducer} from "react";

const initialState = {
 triple: 0,
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
    triple: game(state.nbLaunch),
    stats: true
   }
   
  case "RESET_STATS":
   return {
    ...state,
    stats: false,
    triple: 0,
    nbLaunch: 0
   }
  
  default:
   return state;
 }
}

const game = (num) => {
 const de = () => Math.floor(Math.random() * 6 ) + 1;
 let result = 0;
 
 for (let i = 0; i < num; i++) {
  const launch = [de(), de(), de()];
  if (launch.reduce((acc, curr) => acc + curr, 0) === 18) result++;
 }
 return result
}

export const useGameReducer = () => useReducer(gameReducer, initialState);