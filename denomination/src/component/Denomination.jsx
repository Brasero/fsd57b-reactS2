import {useSelector} from "react-redux";
import {selectDenominationResults} from "../store/selector/denomination-selector.js";

const Denomination = () => {
 const denominations = useSelector(selectDenominationResults)
 
 return <>
  {denominations.length ? <ul>
   {denominations.map(({label, amount}) => {
    return amount !== 0 ? <li key={label}>Dénomination {label} unité(s): {amount}</li> : ''
   })}
  </ul> : <p>Calculer votre rendu monnaie.</p>}
 </>
}

export default Denomination