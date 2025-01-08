import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setMessage, addMessage} from "./store/action/action-types.js";
import {counterSelector, messagesReducerSelector} from "./store/selector/selector.js";


function App() {
  
  const counter = useSelector(counterSelector)
  const {message, messages} = useSelector(messagesReducerSelector)
  const dispatch = useDispatch();
  
  const handleMinus = () => {
    dispatch(decrement())
  }
  
  const handlePlus = () => {
    dispatch(increment())
  }
  
  const handleChange = (e) => {
   const {value} = e.target
   dispatch(setMessage(value))
  }

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <p>{counter}</p>
      <button onClick={handlePlus}>+</button>
     <input type="text" value={message} onChange={handleChange} />
     <button onClick={() => dispatch(addMessage())}>Ajouter</button>
     {messages.length ? messages.map((mess, i) => <p key={i}>{mess}</p>) : <p>Aucun message</p>}
    </>
  )
}

export default App