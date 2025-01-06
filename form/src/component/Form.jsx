import {useState} from "react";


const selectNumbers = [
 "3",
 "5",
 "7",
 "10"
]

const Form = ({number, handleChange, submit}) => {
 
 const [error, setError] = useState("")
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (number === "") {
   setError("Merci de choisir un multiple.")
   return
  }
  setError("")
  submit()
 }
 
 
 return <form onSubmit={handleSubmit}>
  {error !== "" && <p style={{color: "red"}}>{error}</p>}
  <select value={number} onChange={handleChange}>
   <option value={""}>Aucune</option>
   {selectNumbers.map(num => <option value={num} key={num}>{num}</option> )}
  </select>
  <input type={"submit"} value={"Calculer"}/>
 </form>
}


export default Form