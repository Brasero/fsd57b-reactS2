import "../assets/css/home.css";
import {useDispatch, useSelector} from "react-redux";
import {selectDenominationValue} from "../store/selector/denomination-selector.js";
import {calculateDenomination, resetDenomination, setDenominationValue} from "../store/action/denomination-action.js";
import Denomination from "../component/Denomination.jsx";
import {useState} from "react";
import denomination from "../component/Denomination.jsx";
import {selectCounter} from "../store/selector/counter-selector.js";

const Home = () => {
 
 const dispatch = useDispatch()
 const denominationValue = useSelector(selectDenominationValue)
 const counter = useSelector(selectCounter)
 const [error, setError] = useState("")
 
 const handleChange = (e) => {
  const {value} = e.target
  dispatch(setDenominationValue(parseInt(value)||""))
  setError("")
 }
 
 const handleSubmit = () => {
  if (isNaN(denominationValue) || denominationValue === "" || denominationValue <= 0) {
   setError("Votre valeur n'est pas valide, merci de saisir une valeur valide et supérieur à 0 pour continuer.")
   return;
  }
  setError("")
  dispatch(calculateDenomination())
 }
 
 const handleReset = () => {
  dispatch(resetDenomination())
 }
 
 return <div className={"home"}>
  <p>Nombre d'action : {counter}</p>
  <input type="text" placeholder={"Saisissez votre valeur."} value={denominationValue} onChange={handleChange} />
  <p style={{color: "red"}}>{error}</p>
  <button onClick={handleSubmit}>Dénomination</button>
  <button onClick={handleReset}>Reset</button>
  <Denomination />
 </div>
}

export default Home;