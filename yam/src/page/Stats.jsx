import {useGameContext} from "../context/GameContext.jsx";
import {useNavigate} from "react-router-dom";
import Result from "../component/Result.jsx";

const Stats = () => {
 
 const array = Array(6).fill("")
 
 const [state, dispatch] = useGameContext();
 const {nbLaunch, result} = state;
 
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
   {
    array.map((_, i) => {
     return <Result key={i} result={result[`triple${i+1}`]} nb={i+1} />
    })
   }
   <div>
    <button onClick={handleReset}>Reinitialiser</button>
    <button onClick={goHome}>Retour</button>
   </div>
  </>
 )
}

export default Stats;