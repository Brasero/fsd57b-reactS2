import {useDispatch, useSelector} from "react-redux";
import {selectDenominationChoice} from "../store/selector/denomination-selector.js";
import {setDenominationChoice} from "../store/action/denomination-action.js";
import "../assets/css/denominationItem.css";

const DenominationItem = ({list = []}) => {
 
 const selectedDenomination = useSelector(selectDenominationChoice)
 const dispatch = useDispatch()
 const label = list.join(", ")
 
 const handleClick = () => {
 dispatch(setDenominationChoice(list))
 }
 
 return <div className={"item"}>
  <input type="checkbox" name={"deno"} checked={list === selectedDenomination} onChange={handleClick}/>
  <label>
   Dénomination : {label}
  </label>
 </div>
}
export default DenominationItem