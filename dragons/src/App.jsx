import './App.css'
import Form from "./component/Form.jsx";
import List from "./component/List.jsx";
import {useDispatch} from "react-redux";
import Log from "./component/Log.jsx";
import {randomDragon} from "./store/reducer/dragonReducer.js";
import {fetchTodo} from "./store/reducer/todoSlice.js";

function App() {
 
 const dispatch = useDispatch()
 
 const handleClick = () => {
  dispatch(randomDragon())
 }
 
 const handelFetch = () => {
  dispatch(fetchTodo())
 }
 
 return (<>
   <Log />
   <h1>Liste de dragons</h1>
   <Form/>
   <button onClick={handleClick}>Random</button>
   <List />
   <button onClick={handelFetch}>Fetch todo</button>
  </>)
}

export default App