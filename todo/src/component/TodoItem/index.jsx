// path: todo/src/component/TodoItem/index.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {completeTodo} from "../../store/reducer/todoSlice.jsx";
import {selectTodoUpdateState} from "../../store/selector/todo-selector.js";
import Loader from "../Loader/index.jsx";

const TodoItem = ({todo}) => {
 
 const dispatch = useDispatch()
 const isLoading = useSelector(selectTodoUpdateState)
 
 const handleClick = () => {
  dispatch(completeTodo(todo.id))
 }
 
 return (
  <div className="TodoItem">
   <p>{todo.title}</p>
   {
    isLoading ? <Loader size={20}/> : <input type={"checkbox"} checked={todo.completed} onChange={handleClick}/>
   }
  </div>
 )
}

export default TodoItem