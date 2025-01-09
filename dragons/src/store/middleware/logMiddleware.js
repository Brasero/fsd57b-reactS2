import {ADD_DRAGON, DELETE_DRAGON} from "../constant/action-type.js";
import {addLog} from "../action/log-action.js";

const logMiddleware = (store) => (next) => (action) => {
 const triggerActions = [ADD_DRAGON, DELETE_DRAGON];
 if (triggerActions.includes(action.type)) {
  store.dispatch(addLog({
   dragonName: action.type === DELETE_DRAGON ?
    action.payload.name :
    action.payload,
   actionName: action.type}))
 }
 
 
 return next(action)
}

export default logMiddleware