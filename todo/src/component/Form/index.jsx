// path: todo/src/component/Form/index.jsx
import "./style.scss";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/reducer/todoSlice.jsx";

const Form = () => {
 
 const dispatch = useDispatch()
 
 const [todo, setTodo] = useState({
  title: "", completed: false
 })
 
 const handleChange = (e) => {
  setTodo({
   ...todo, title: e.target.value
  })
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  setTodo({
   title: "",
   completed: false
  })
  dispatch(addTodo(todo))
 }
 
 return (<form className="Form" onSubmit={handleSubmit}>
  <label htmlFor="content">
   <span>Contenu de votre todo</span>
   <textarea name="content" id="content" value={todo.title} cols="30" rows="10" onChange={handleChange}/>
  </label>
  <button role={"button"}>Ajouter</button>
 </form>)
}

export default Form