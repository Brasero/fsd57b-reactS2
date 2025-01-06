import './App.css'
import Form from "./component/Form.jsx";
import {useState} from "react";
import Numbers from "./component/Numbers.jsx";


function App() {
  
  const LIMIT = 100;
  
  const [number, setNumber] = useState("")
  const [numbers, setNumbers] = useState([])
  
  const handleNumberChange = (e) => {
    const {value} = e.target
    setNumber(value)
  }
  
  const calculate = () => {
    let result = 0;
    let counter = 1;
    const numbersArray = [];
    if (number === "") {
      return
    }
    while (result < LIMIT) {
      result = parseInt(number) * counter;
      if(result > LIMIT) {
        break;
      }
      numbersArray.push(result)
      counter++;
    }
    setNumbers(numbersArray);
  }
  

  return (
    <>
      <Form number={number} handleChange={handleNumberChange} submit={calculate} />
      <Numbers numbers={numbers} />
    </>
  )
}

export default App