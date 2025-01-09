import {useDispatch, useSelector} from "react-redux";
import {selectLogs} from "../store/selector/logSelector.js";
import {resetLog} from "../store/action/log-action.js";

const Log = () => {
 
 const logs = useSelector(selectLogs)
 const dispatch = useDispatch()
 
 const handleClick = () => {
  dispatch(resetLog())
 }
 
 
 return <>
  <h3>Logs</h3>
  <div className="logs">
   {
    logs.length ?
     <ul style={{maxHeight: "150px", overflowY: "scroll"}}>
      {
       logs.map((log, i) => {
        return <li key={i}>
         <span>Heure : {log.date}</span>
         <span>Action : {log.actionName}</span>
         <span>Dragon : {log.dragonName}</span>
        </li>
       })
      }
     </ul>
     :
     <p>Aucun Log à afficher</p>
   }
  </div>
  <button onClick={handleClick}>Reset log</button>
 </>
}

export default Log