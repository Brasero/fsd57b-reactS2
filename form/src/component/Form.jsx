import {useState} from "react";

const Form = () => {
 
 const [formState, setFormState] = useState({
  name: "",
  firstName: ""
 })
 
 
 const handleChange = (e) => {
  const {name, value} = e.target
  setFormState({
   ...formState,
   [name]: value
  })
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  setFormState({
   name: "",
   firstName: ""
  })
 }
 
 return <form onSubmit={handleSubmit}>
  <input type="text" name={"name"} value={formState.name} onChange={handleChange} />
  <p>{formState.name}</p>
  <input type={"text"} name={"firstName"}  value={formState.firstName} onChange={handleChange} />
  <p>{formState.firstName}</p>
  <input type={"submit"} value={"soumettre"}/>
 </form>
}

export default Form;