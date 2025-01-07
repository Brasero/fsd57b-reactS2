import {useGameContext} from "../context/GameContext.jsx";

const Result = ({nb, result})=> {
 
 const [{nbLaunch}] = useGameContext()
 
 
 return <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: ".3rem",
  marginBottom: '1rem',
  border: "1px solid #ccc",
  padding: ".3rem .5rem"
 }}>
  <div>Nombre de brelans de {nb}  : <span style={{color: "black", fontWeight: "bold"}}>{result}</span></div>
  <div>Pourcentage de brelans de {nb} : <span
   style={{color: "black", fontWeight: "bold"}}>{((result / nbLaunch) * 100).toFixed(2)}%</span></div>
 </div>;
}
export default Result