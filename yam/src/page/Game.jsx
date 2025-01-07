import {Link} from "react-router-dom";
import {useGameContext} from "../context/GameContext.jsx";
import {useState} from "react";

const Game = () => {
 
 const [state, dispatch] = useGameContext();
 const [error, setError] = useState("");
 const {nbLaunch, stats} = state;
 
 const handleChange = (e) => {
  const {value} = e.target;
  dispatch({
   type: "SET_NB",
   payload: value
  })
  setError("")
 }
 
 const handleSubmit = () => {
  if (nbLaunch <= 0) {
   setError("Saisissez le nombre de lancer souhaité avant de démarrer le jeu.")
   return
  }
  dispatch({
   type: "LAUNCH"
  })
 }
 
 return (
  <>
   <input type={"number"} onChange={handleChange} name={"nbLaunch"} value={nbLaunch} placeholder={"Nombre de lancer"} />
   <br />
   {error !== "" && <p style={{color: "red"}}>{error}</p>}
   <button onClick={handleSubmit}>Lancer</button>
   <br />
   {
    stats && <Link to={"/stats"}>Statistiques</Link>
   }
  </>
 )
}

export default Game;