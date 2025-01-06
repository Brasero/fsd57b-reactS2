import './App.css'
import {useBaseReducer} from "./store/index.jsx";
import BaseNumberInput from "./component/BaseNumberInput.jsx";

function App() {
  const [state, dispatch] = useBaseReducer();
  const {number, conversion} = state;

  const onChangeBase = (number, base) => {
    dispatch({
      type: "SET_NUMBER",
      payload: {
        number,
        base
      }
    })
  }
  
  return (
    <>
      <BaseNumberInput base={10} value={number} onBaseChange={onChangeBase} />
      <BaseNumberInput base={2} value={conversion} onBaseChange={onChangeBase} />
    </>
  )
}

export default App