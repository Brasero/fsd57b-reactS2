import {useGameContext} from "../context/GameContext.jsx";
import {useNavigate} from "react-router-dom";

const Stats = () => {
 
 const [state, dispatch] = useGameContext();
 const {nbLaunch, triple} = state;
 
 const navigate = useNavigate()
 
 const handleReset = () => {
  dispatch({
   type: "RESET_STATS"
  })
  navigate("/", {replace: true})
 }
 
 const goHome = () => {
  navigate("/")
 }
 
 return (
  <>
   <div>Nombre de lancé : <span style={{color: "black", fontWeight: "bold"}}>{nbLaunch}</span></div>
   <div>Nombre de brelans de 6 : <span style={{color: "black", fontWeight: "bold"}}>{triple}</span></div>
   <div>Pourcentage de brelans de 6 : <span style={{color: "black", fontWeight: "bold"}}>{((triple / nbLaunch) * 100).toFixed(2)}%</span></div>
   <div>
    <button onClick={handleReset}>Reinitialiser</button>
    <button onClick={goHome}>Retour</button>
   </div>
  </>
 )
}

export default Stats;