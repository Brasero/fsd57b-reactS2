import {useState} from "react";
import Users from "./Users.jsx";
import {useUserContext} from "../context/UserContext.jsx";

const Form = () => {
 
 const [state, dispatch] = useUserContext()
 
 
 const handleChange = (e) => {
  const {value} = e.target
  dispatch({
   type: "update_name",
   payload: value
  })
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (state.name.trim() === "") {
   dispatch({
    type: "update_error",
    payload: "Merci de saisir une valeur"
   })
   return
  }
  
  dispatch({
   type: "add_user"
  })
 }
 
 const [textArea, setTextArea] = useState("Entrez votre message")
 
 const handleTextChange = (e) => {
  const {value} = e.target
  setTextArea(value)
 }
 
 const [select, setSelect] = useState(["2", "4"])
 
 const handleSelectChange = (e) => {
  const {value} = e.target
  let selectCopy = [...select]
  if (select.includes(value)) {
   selectCopy = selectCopy.filter((val) => val !== value)
  } else {
   selectCopy = selectCopy.concat([value])
  }
  setSelect(selectCopy)
 }
 
 const [check, setCheck] = useState(false)
 
 const handleClick = () => {
  setCheck(!check)
 }
 
 return <>
  <form onSubmit={handleSubmit}>
   <input type="text" name={"name"} value={state.name} onChange={handleChange}/>
   
   <textarea value={textArea} onChange={handleTextChange} />
   
   <input type={"checkbox"} checked={check} onClick={handleClick}/>
   
   <select value={select} onChange={handleSelectChange} multiple={true}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
   </select>
   
   <input type={"submit"} value={"soumettre"}/>
  </form>
  {
   state.error !== "" && <p style={{color: "red"}}>{state.error}</p>
  }
 </>
}

export default Form;