import {useDispatch, useSelector} from "react-redux";
import {selectDragon, selectDragons} from "../store/selector/dragonSelector.js";
import {addDragon, setDragonName} from "../store/action/dragon-action.js";
import {useState} from "react";

const Form = () => {
 
 const [error, setError] = useState("")
 
 const dragon = useSelector(selectDragon)
 const dragons = useSelector(selectDragons)
 const dispatch = useDispatch()
 
 const handleChange = (e) => {
  const {value} = e.target
  dispatch(setDragonName(value))
  setError("")
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  const dragonExist = dragons.find((drag) => drag.name.trim().toLowerCase() === dragon.name.trim().toLowerCase())
  if (dragonExist !== undefined) {
   setError("Ce dragon se trouve déjà dans la liste.")
   return
  }
  setError("")
  dispatch(addDragon())
 }
 
 return <form onSubmit={handleSubmit}>
  <input type={"text"} value={dragon.name} onChange={handleChange} placeholder={"Nom du dragon"} />
  {error !== "" && <p style={{color: "red"}}>{error}</p>}
  <button role={"button"}>Ajouter</button>
 </form>
}

export default Form;