import './App.css'
import Form from "./component/Form.jsx";
import List from "./component/List.jsx";
import {useDispatch} from "react-redux";
import {sortRandomDragon} from "./store/action/dragon-action.js";

function App() {
 
 const dispatch = useDispatch()
 
 const handleClick = () => {
  dispatch(sortRandomDragon())
 }
 
 return (<>
   <h1>Liste de dragons</h1>
   <Form/>
   <button onClick={handleClick}>Random</button>
   <List />
  </>)
}

export default App