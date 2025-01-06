import {useState} from "react";
import Users from "./Users.jsx";

const Form = () => {
 
 const [name, setName] = useState("")
 const [users, setUsers] = useState([])
 const [error, setError] = useState("")
 
 
 const handleChange = (e) => {
  const {value} = e.target
  setName(value.toUpperCase())
  setError("")
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  
  if (name.trim() === "") {
   setError("Merci de saisir une valeur")
   return
  }
  
  if (users.includes(name.trim())) {
   setError("Cet utilisateur existe déjà")
   return
  }
  
  setUsers([
   ...users,
   name.trim()
  ])
  setName("")
 }
 
 return <>
  <form onSubmit={handleSubmit}>
   <input type="text" name={"name"} value={name} onChange={handleChange}/>
   <input type={"submit"} value={"soumettre"}/>
  </form>
  {
   error !== "" && <p style={{color: "red"}}>{error}</p>
  }
  <Users users={users} />
 </>
}

export default Form;