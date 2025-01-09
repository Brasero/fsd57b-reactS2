// path: todo/src/component/TodoList/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectTodo, selectTodoLoadingState} from "../../store/selector/todo-selector.js";
import Loader from "../Loader/index.jsx";
import TodoItem from "../TodoItem/index.jsx";

const TodoList = () => {
 
 const todos = useSelector(selectTodo);
 const isLoading = useSelector(selectTodoLoadingState);
 
 return (
  <div className="TodoList">
   {
    isLoading ? <Loader /> : todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
   }
  </div>
 )
}

export default TodoList