import {addDragon, deleteDragon} from "../reducer/dragonReducer.js";


const logMiddleware = (store) => (next) => (action) => {
 const triggerActions = [addDragon().type, deleteDragon().type];
 if (triggerActions.includes(action.type)) {
  // store.dispatch(addLog({
  //  dragonName: action.type === deleteDragon().type ?
  //   action.payload.name :
  //   action.payload,
  //  actionName: action.type}))
 }


 return next(action)
}

export default logMiddleware