import './App.css'
import Home from "./page/Home.jsx";
import Nav from "./component/Nav.jsx";
import {Route, Routes} from "react-router-dom";
import DenominationSelection from "./page/DenominationSelection.jsx";

function App() {

  return (
    <>
      <Nav />
      <h1>Dénominations</h1>
      <Routes>
       <Route path={"/"} element={<Home />} />
       <Route path={"/denomination"} element={<DenominationSelection />} />
      </Routes>
    </>
  )
}

export default App