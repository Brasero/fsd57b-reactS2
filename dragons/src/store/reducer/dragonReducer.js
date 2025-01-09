import {createSlice} from "@reduxjs/toolkit";

// import {ADD_DRAGON, DELETE_DRAGON, RANDOM_DRAGON, SET_DRAGON_NAME} from "../constant/action-type.js";
//
let id = 0;
//
const initialState = {
 dragons: [],
 dragon: {
  id: id++,
  name: ""
 }
}
//
// const dragonReducer = (state = initialState, action) => {
//  switch(action.type) {
//
//   case SET_DRAGON_NAME:
//    return {
//     ...state,
//     dragon: {
//      ...state.dragon,
//      name: action.payload
//     }
//    }
//
//   case ADD_DRAGON:
//    return {
//     ...state,
//     dragon: {
//      id: id++,
//      name: ""
//     },
//     dragons: state.dragons.concat([{...state.dragon, name: state.dragon.name.trim()}])
//    }
//
//   case DELETE_DRAGON:
//    return {
//     ...state,
//     dragons: state.dragons.filter((drag) => drag.id !== action.payload.id)
//    }
//
//   case RANDOM_DRAGON:
//    return {
//     ...state,
//     dragons: [...state.dragons].sort(() => Math.random() - 0.5)
//    }
//
//   default:
//    return state;
//  }
// }
//
// export default dragonReducer;

const dragonSlice = createSlice({
 name: "dragon",
 reducers: {
  setDragonName(state, action) {
   state.dragon.name = action.payload
  },
  addDragon(state, action) {
   state.dragons.push({ ...state.dragon, id: id++, name: state.dragon.name.trim()})
  },
  deleteDragon(state,action) {
   state.dragons = state.dragons.filter((drag) => drag.id !== action.payload.id)
   return state;
  },
  randomDragon(state, action) {
   state.dragons.sort(() => Math.random() - 0.5)
  }
 },
 initialState
})

export const {
 setDragonName,
 addDragon,
 deleteDragon,
 randomDragon
} = dragonSlice.actions


export default dragonSlice.reducer