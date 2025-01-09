import {denominations} from "../constant/denominations.js";
import DenominationItem from "../component/DenominationItem.jsx";

const DenominationSelection = () => {
 const denoArray = Object.keys(denominations)
 
 
 return <>
  <h2>Choisissez une dénomination</h2>
  <div style={{
   display: "flex",
   flexDirection: "column",
   alignItems: "flex-start"
  }}>
  {
   denoArray.map(deno => <DenominationItem key={deno} list={denominations[deno]} />)
  }
  </div>
 </>
}

export default DenominationSelection