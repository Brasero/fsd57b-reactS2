import {useDispatch} from "react-redux";
import {deleteDragon} from "../store/action/dragon-action.js";

const DragonItem = ({dragon}) => {
 
 const dispatch = useDispatch()
 
 const handleClick = () => {
  dispatch(deleteDragon({id: dragon.id, name: dragon.name}))
 }
 
 return <li><span>{dragon.name}</span><button onClick={handleClick} style={{background: "red"}}>X</button></li>
}

export default DragonItem;