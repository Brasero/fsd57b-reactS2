import './App.css'
import TodoList from "./component/TodoList/index.jsx";
import Nav from "./component/Nav/index.jsx";
import {Route, Routes} from "react-router-dom";
import Form from "./component/Form/index.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchTodo} from "./store/reducer/todoSlice.jsx";

function App() {
 
 const dispatch = useDispatch()
 
 useEffect(() => {
  dispatch(fetchTodo())
 }, []);

  return (
    <>
      <Nav />
      <h1>Todo App</h1>
      <Routes>
       <Route path={"/"} element={<TodoList />} />
       <Route path={"/add"} element={<Form />} />
      </Routes>
    </>
  )
}

export default App