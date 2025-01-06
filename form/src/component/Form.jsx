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
 
 return <>
  <form onSubmit={handleSubmit}>
   <input type="text" name={"name"} value={state.name} onChange={handleChange}/>
   <input type={"submit"} value={"soumettre"}/>
  </form>
  {
   state.error !== "" && <p style={{color: "red"}}>{state.error}</p>
  }
 </>
}

export default Form;