import {CALC_DENOMINATION, RESET_DENOMINATION} from "../constant/denomination-action-types.js";
import {incrementCounter, resetCounter} from "../action/counter-action.js";

export const counterMiddleware = (store) => (next) => (action) => {
 
 if (action.type === CALC_DENOMINATION) {
  store.dispatch(incrementCounter())
 }
 
 if (action.type === RESET_DENOMINATION) {
  store.dispatch(resetCounter())
  return
 }
 
 return next(action)
}


//La fonction ci-dessous est équivalente à celle du dessus
function counterMiddlewareFn (store) {
 return function(next) {
  return function (action) {
   
   return next(action)
  }
 }
}