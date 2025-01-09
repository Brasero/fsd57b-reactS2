import './App.css'
import Form from "./component/Form.jsx";
import List from "./component/List.jsx";
import {useDispatch} from "react-redux";
import Log from "./component/Log.jsx";
import {randomDragon} from "./store/reducer/dragonReducer.js";

function App() {
 
 const dispatch = useDispatch()
 
 const handleClick = () => {
  dispatch(randomDragon())
 }
 
 return (<>
   {/*<Log />*/}
   <h1>Liste de dragons</h1>
   <Form/>
   <button onClick={handleClick}>Random</button>
   <List />
  </>)
}

export default App